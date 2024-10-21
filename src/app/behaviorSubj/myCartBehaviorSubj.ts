import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InitialMyCart, MyCart } from "../interface/myCart";

@Injectable()
export class MyCartBehaviorSubj {

    private myCart = new BehaviorSubject<MyCart>(InitialMyCart.initialMyCart());

    getMycart(){
        return this.myCart.asObservable() 
    }
    
    setMycart(data: MyCart){
        this.myCart.next(data)
    }
}