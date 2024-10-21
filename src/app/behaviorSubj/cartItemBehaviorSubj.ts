import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem, initialCartItem } from "../interface/cartItem";

@Injectable()
export class CartItemBehaviorSubj {
    private cartItem = new BehaviorSubject<CartItem>(initialCartItem.initialCartItem());
    private cartItemList = new BehaviorSubject<CartItem[]>([]);
    
    getCartItem(){
        return this.cartItem.asObservable()
    }

    setCartItem(data: CartItem){
        this.cartItem.next(data)
    }

    getCartItemList(){
        return this.cartItemList.asObservable()
    }

    setCartItemList(data: CartItem[]){
        this.cartItemList.next(data)
    }
}