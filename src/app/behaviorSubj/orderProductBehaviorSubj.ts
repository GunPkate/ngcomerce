import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { InitialProduct, Product } from "../interface/product";

@Injectable()
export class OrderProductBehaviorSubj {

    private product = new BehaviorSubject<Product>(InitialProduct.InitialProduct());

    getOrderProduct(){
        return this.product.asObservable() 
    }
    
    setOrderProduct(data: Product){
        this.product.next(data)
    }
}