import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj";
import { MyCartDetailBehaviorSubj } from "../behaviorSubj/myCartDetailBehaviorSubj";

@Injectable()
export class MyCartService{
    constructor(
        private http: HttpClient,
        private myCartDetailBehaviorSubj: MyCartDetailBehaviorSubj
    ){}

    loadCartDetail2(cartId: string){

        this.http.post("http://localhost:3000/mycart/cartdetails/"+cartId,{}).subscribe(
            (data: any) => {  this.myCartDetailBehaviorSubj.setMyCartDetail(data) }
        )
    }
}