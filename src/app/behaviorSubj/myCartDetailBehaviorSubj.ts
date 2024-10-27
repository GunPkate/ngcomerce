import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InitialMycartDetail, MyCartDetail } from "../interface/myCartDetails";


@Injectable()
export class MyCartDetailBehaviorSubj {

    private myCartDetail = new BehaviorSubject<MyCartDetail>(InitialMycartDetail.InitialMycartDetail());

    getMyCartDetail(){
        return this.myCartDetail.asObservable() 
    }
    
    setMyCartDetail(data: MyCartDetail){
        this.myCartDetail.next(data)
    }
}