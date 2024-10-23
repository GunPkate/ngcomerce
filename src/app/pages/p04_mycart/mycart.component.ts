import { Component, OnInit } from '@angular/core';
import { CartItemBehaviorSubj } from 'src/app/behaviorSubj/cartItemBehaviorSubj';
import { MyCartBehaviorSubj } from 'src/app/behaviorSubj/MyCartBehaviorSubj';
import { CartItem } from 'src/app/interface/cartItem';
import { MyCart } from 'src/app/interface/myCart';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(
    private cartItemBehaviorSubj: CartItemBehaviorSubj,
    private myCartBehaviorSubj: MyCartBehaviorSubj
  ) { }

  itemlist: any = []
  itemList:CartItem[] = []

  ngOnInit(): void {
    this.myCartBehaviorSubj.getMycart().subscribe(data => console.log(data))
    this.cartItemBehaviorSubj.getCartItemList().subscribe(data =>{
      this.itemlist = (data)
      console.log(data)
    } 
  )
  }

}
