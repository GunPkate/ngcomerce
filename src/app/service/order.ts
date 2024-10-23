import { HttpClient } from "@angular/common/http"
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj"
import { Injectable } from "@angular/core"

@Injectable()
export class OrderService{
    constructor(
        private http: HttpClient,
        private myCartBehaviorSubj :MyCartBehaviorSubj
    ){}

    createCart(){

    }

    loadCart(){
        this.http.get("http://localhost:3000/order/cart").subscribe((data: any)=>{
            this.myCartBehaviorSubj.setMycart(data)
          })
    }

    loadProduct(){

    }
}