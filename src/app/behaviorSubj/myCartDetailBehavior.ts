import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InitialMycartDetail, MyCartDetail } from "../interface/myCartDetails";

@Injectable()
export class MyCarttDetailBehaviorSubj {

    private myCart = new BehaviorSubject<MyCartDetail>(InitialMycartDetail.InitialMycartDetail());

    getMyCartDetail(){
        return this.myCart.asObservable() 
    }
    
    setMyCartDetail(data: MyCartDetail){
        this.myCart.next(data)
    }
}