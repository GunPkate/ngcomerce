import { HttpClient } from "@angular/common/http"
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj"
import { Injectable } from "@angular/core"
import { OrderProductBehaviorSubj } from "../behaviorSubj/orderProductBehaviorSubj"
import { InitialProduct, Product } from "../interface/product"
import { InitialProductDetail } from "../interface/productDetail"

import { initialCartItemUI } from "../interface/cartItemUI"
import { CartItemBehaviorSubj } from "../behaviorSubj/cartItemBehaviorSubj"

@Injectable()
export class OrderService{
    constructor(
        private http: HttpClient,
        private cartItemBehaviorSubj: CartItemBehaviorSubj,
        private orderProductBehaviorSubj: OrderProductBehaviorSubj
    ){}

    createCart(){

    }

    loadCartItems(id: string){
        this.http.get("http://localhost:3000/order/cartitem/"+id).subscribe((data: any)=>{  
            let initialMyCartItem = initialCartItemUI.initialCartItemUI(); 
            data ? this.cartItemBehaviorSubj.setCartItemList(data) : this.cartItemBehaviorSubj.setCartItemList([])
        })
    }

    loadProduct(productIdBody: any){
        this.http.post("http://localhost:3000/order/product",productIdBody).subscribe((data: any)=> {  
            let product: Product = InitialProduct.InitialProduct();

            product.id = data.id
            product.name = data.name
            product.cat_id = data.cat_id
            // product.details = data.product_detail
            product.variants = data.variants
 
            product.imgUrl = data.img_url

            let productDetail = InitialProductDetail.InitialProductDetail()
            if(data.product_detail.length > 0){
                productDetail.id = data.product_detail[0].id
                productDetail.description = data.product_detail[0].description
                productDetail.price = data.product_detail[0].price
                productDetail.promotion_price = data.product_detail[0].promotion_price
                productDetail.name = data.product_detail[0].name
                productDetail.rating = data.product_detail[0].rating
            }
            product.details = productDetail

            this.orderProductBehaviorSubj.setOrderProduct(product) 
        })
    }

    // loadProduct(){
    //     this.http.get("http://localhost:3000/order/product").subscribe((data: any)=> {  
    //         let product: Product = InitialProduct.InitialProduct();
  

    //         this.orderProductBehaviorSubj.setOrderProduct(product) 
    //     })
    // }

    clearData(){
        this.orderProductBehaviorSubj.setOrderProduct(InitialProduct.InitialProduct());
    }
}