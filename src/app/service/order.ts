import { HttpClient } from "@angular/common/http"
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj"
import { Injectable } from "@angular/core"
import { OrderProductBehaviorSubj } from "../behaviorSubj/orderProductBehaviorSubj"
import { InitialProduct, Product } from "../interface/product"
import { InitialProductDetail } from "../interface/productDetail"

@Injectable()
export class OrderService{
    constructor(
        private http: HttpClient,
        private myCartBehaviorSubj: MyCartBehaviorSubj,
        private orderProductBehaviorSubj: OrderProductBehaviorSubj
    ){}

    createCart(){

    }

    loadCart(){
        this.http.get("http://localhost:3000/order/cart").subscribe((data: any)=>{ this.myCartBehaviorSubj.setMycart(data) })
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
            productDetail.id = data.product_detail[0].id
            productDetail.description = data.product_detail[0].description
            productDetail.price = data.product_detail[0].price
            productDetail.promotion_price = data.product_detail[0].promotion_price
            productDetail.name = data.product_detail[0].name
            productDetail.rating = data.product_detail[0].rating
            product.details = productDetail

            this.orderProductBehaviorSubj.setOrderProduct(product) 
        })
    }
}