import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyCartBehaviorSubj } from "../behaviorSubj/MyCartBehaviorSubj";

@Injectable()
export class MyCartService{
    constructor(
        private http: HttpClient,
        private myCartBehaviorSubj: MyCartBehaviorSubj
    ){}
    loadCartDetail(data: any){
        this.http.post("http://localhost:3000/mycart/cartdetails",data).subscribe(
            (data: any) => {  
                console.log(111,data)
                this.myCartBehaviorSubj.setMycart(data) 
            }
        )
    }
}