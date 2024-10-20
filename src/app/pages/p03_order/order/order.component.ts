import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initialMyCart, MyCart } from 'src/app/interface/myCart';
import { InitialProduct, Product } from 'src/app/interface/product';
import { InitialProductImg, productImg } from 'src/app/interface/productImg';
import { ProductVariant } from 'src/app/interface/productVariant';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  constructor( private router:Router, private http: HttpClient) { }
  title: string = "My Order"
  imgList:any = []
  page: number = 1

  selectItem: Product = InitialProduct.InitialProduct()
  selectImg =""
  imgAll: productImg[] = []
  orderQty: number = 0
  myCart:MyCart[] = []
  productCode = ""

  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    this.productCode = a[2]

    Promise.all(
      [
      this.http.post("http://localhost:3000/order/product",{ id: this.productCode}).subscribe(
        (res: any)=>{ 
          this.selectItem.name = res.name

          res.img_url.forEach((e: productImg) => { this.imgAll.push(e)});
          this.selectImg = this.imgAll[0].img_url
          this.imgList = this.imgAll.filter(x=> parseInt(x.img_code) <= 3);

          this.selectItem.details.description = res.product_detail[0].description
          this.selectItem.details.price = res.product_detail[0].price
          this.selectItem.details.promotion_price = res.product_detail[0].promotion_price
          this.selectItem.details.rating = res.product_detail[0].rating

          this.selectItem.variants = res.variants.sort((u: any,v : any) => u.size -v.size)
          // console.log(JSON.stringify(this.selectItem.variants))

          if(this.myCart.length === 0){
            for(let i =0; i < this.selectItem.variants.length; i++ ){
              this.newCart(0,this.selectItem.variants[i])
            }
          }
        }   
      )
      ]
    )
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
    const parser = new DOMParser();
    let color = `<div style ="background-color: red; width: 30px; height: 30px;"> ${value} </div>`
    const htmlDoc = parser.parseFromString(color, 'text/html')
    return color
  }

  setOrder(number: number, value: MyCart){

    let count = 0;
    this.myCart.forEach( x =>{
      if (x.skucode.includes(value.skucode) ) count++
    })

    for (let i = 0; i < this.myCart.length; i++) {
      if(this.myCart[i].skucode === value.skucode){
        if( this.myCart[i].qty + number >= 0){
          this.myCart[i].qty += number
          this.orderQty += number
        }
      }
    }


    console.log(this.myCart.map(x=> x.skucode +"qty "+ x.qty + " "))

  }

  newCart( number: number, value: ProductVariant){
    let data = initialMyCart.initialMyCart();
    data.id = value.id
    data.product_code = this.productCode
    data.qty += number 
    data.skucode = value.skucode
    this.myCart.push(data)
    console.log(this.myCart)
  }
}
