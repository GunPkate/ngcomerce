import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialCartItem, CartItem } from 'src/app/interface/cartItem';
import { InitialProduct, Product } from 'src/app/interface/product';
import { InitialProductImg, productImg } from 'src/app/interface/productImg';
import { ProductVariant } from 'src/app/interface/productVariant';
import { DomSanitizer } from '@angular/platform-browser'
import { MyCartBehaviorSubj } from 'src/app/behaviorSubj/MyCartBehaviorSubj';
import { InitialMyCart, MyCart } from 'src/app/interface/myCart';
import { CartItemBehaviorSubj } from 'src/app/behaviorSubj/cartItemBehaviorSubj';
import { OrderService } from 'src/app/service/order';
import { OrderProductBehaviorSubj } from 'src/app/behaviorSubj/orderProductBehaviorSubj';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  constructor( 
    private router:Router, 
    private http: HttpClient, 
    private sanitized: DomSanitizer,
    private myCartBehaviorSubj: MyCartBehaviorSubj,
    private cartItemBehaviorSubj: CartItemBehaviorSubj,
    private orderProductBehaviorSubj: OrderProductBehaviorSubj,
    private orderService: OrderService
  ) { }
  title: string = "My Order"
  imgList:any = []
  page: number = 1

  selectItem: Product = InitialProduct.InitialProduct()
  selectImg =""
  imgAll: productImg[] = []
  orderQty: number = 0

  selectToCart:CartItem[] = []
  cartItem:CartItem[] = []
  summaryOrder: ProductVariant[] = []
  myCart!: MyCart | null;

  productCode = ""
  selectColor:string[] = []
  colorUi = ""
  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    this.productCode = a[2]

    Promise.all(
      [
        this.orderService.loadProduct({ id: this.productCode}),
        this.orderService.loadCart()
      ]
    )

    this.myCartBehaviorSubj.getMycart().subscribe((data) =>{ this.myCart = data;})

    this.orderProductBehaviorSubj.getOrderProduct().subscribe( (res)=>{  this.setProductToUI(res) }  )
  }

  setProductToUI(res: Product){
    this.selectItem.name = res.name

        res.imgUrl.forEach((e: productImg) => { 
          this.imgAll.push(e)
          if(e.img_code === "1") this.selectImg = e.img_url
        });
        this.imgList = this.imgAll.filter(x=> parseInt(x.img_code) <= 3);

        this.selectItem.details.description = res.details.description
        this.selectItem.details.price = res.details.price
        this.selectItem.details.promotion_price = res.details.promotion_price
        this.selectItem.details.rating = res.details.rating

        if(res.variants.length > 0){
          if( Number(res.variants[0].size ) > 0 ){
            this.selectItem.variants = res.variants.sort((u: any,v : any) => u.size -v.size)
          }else {
            this.selectItem.variants = res.variants.sort((u: any,v : any) => {
              return u.color > v.color ? 1 : -1 && u.size > v.size ? 1 : -1 
            })
          }
        }

        this.selectColor = [...new Set(this.selectItem.variants.map(x=>x.color_code))]
        this.setUI(this.selectColor[0])

        if(this.selectToCart.length === 0){
          for(let i =0; i < this.selectItem.variants.length; i++ ){
            this.newCart(0,this.selectItem.variants[i])
          }
        }
  }
  
  changeImg(value: number){
    this.page += value
    this.imgList = [];
    let limitMax = 3 * this.page;
    let limitMin = limitMax - 3 +1;
    
    // this.selectImg = this.imgAll[0+value].img_url

    if(this.imgAll.length >= limitMax){
      for (let i = 0; i < limitMax; i++) {
        this.imgList.push(this.imgAll[i])
      }
    }else{
      for (let i = 0 + limitMin - 1; i < limitMax; i++) {
        if(this.imgAll.length - 1){
          this.imgList.push(this.imgAll[i])
        }else{
          this.imgList.push({name:""})
        }
      }
    }
    console.log(this.imgList)
  }

  setSelectImg(value: number){
    this.selectImg = this.imgAll[value-1].img_url
  }

  setColor(value: string){
    let color = this.sanitized.bypassSecurityTrustHtml(
      `<div style ="background-color: ${value}; width: 40px; height: 40px; cursor: pointer; border-radius: 5px;"> </div>`
    )
    return color
  }

  setOrder(number: number, value: CartItem){

    for (let i = 0; i < this.selectToCart.length; i++) {
      if(this.selectToCart[i].skucode === value.skucode){
        if( this.selectToCart[i].qty + number >= 0){
          this.selectToCart[i].qty += number
          this.orderQty += number
        }
      }
    }

  }

  newCart( number: number, value: ProductVariant){
    let data = initialCartItem.initialCartItem();
    data.id = value.color_code
    data.product_code = this.productCode
    data.qty += number 
    data.skucode = value.skucode
    this.selectToCart.push(data)
  }

  setUI(value: string){
    this.colorUi = value;
  }

  addToCart(){
    this.cartItem = []
    this.cartItem = this.selectToCart.filter(x=>x.qty>0)
    let checkSku = [...new Set(this.cartItem.map(y=>y.skucode))]
    this.summaryOrder = []
    this.summaryOrder = this.selectItem.variants.filter(x=>checkSku.includes(x.skucode))
    // localStorage.clear()
    localStorage.setItem("customerId","AAA")
    localStorage.setItem("productCode",this.productCode)
  }

  async confirmMyCart(){
    let checkCart: any
    let user: any = localStorage.getItem("customerId") ? localStorage.getItem("customerId") : ""
    this.myCartBehaviorSubj.getMycart().subscribe(data =>checkCart = data)
    let newCart = InitialMyCart.initialMyCart();
    if(checkCart.itemId === ""){
      newCart.customerId = user
      newCart.itemId = uuidv4()
      newCart.id = this.productCode

      await this.myCartBehaviorSubj.setMycart(newCart);

      this.http.post("http://localhost:3000/order/createcart",newCart).subscribe()
      console.log(newCart)
    }
    await this.cartItemBehaviorSubj.setCartItemList(this.cartItem)

    console.log(checkCart)

    
  }
}
