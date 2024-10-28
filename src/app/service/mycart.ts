import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj";
import { MyCartDetailBehaviorSubj } from "../behaviorSubj/myCartDetailBehaviorSubj";
import { InitialMyCart } from "../interface/myCart"

@Injectable()
export class MyCartService{
    constructor(
        private http: HttpClient,
        private myCartDetailBehaviorSubj: MyCartDetailBehaviorSubj,
        private myCartBehaviorSubj: MyCartBehaviorSubj,
    ){}

    loadCartDetail2(cartId: string){

        this.http.post("http://localhost:3000/mycart/cartdetails/"+cartId,{}).subscribe(
            (data: any) => {  this.myCartDetailBehaviorSubj.setMyCartDetail(data) }
        )
    }

    loadCart(cartId: string){
        this.http.get("http://localhost:3000/order/cart").subscribe((data: any)=>{  
            let initialMyCart = InitialMyCart.initialMyCart(); 
            console.log(123,data)
            data ? this.myCartBehaviorSubj.setMycart(data) : this.myCartBehaviorSubj.setMycart(initialMyCart)
        })
    }
}