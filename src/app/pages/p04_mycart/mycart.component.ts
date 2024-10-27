import { Component, OnInit } from '@angular/core';
import { CartItemBehaviorSubj } from 'src/app/behaviorSubj/cartItemBehaviorSubj';
import { MyCartBehaviorSubj } from 'src/app/behaviorSubj/MyCartBehaviorSubj';
import { MyCartDetailBehaviorSubj } from 'src/app/behaviorSubj/myCartDetailBehaviorSubj';
import { CartItem } from 'src/app/interface/cartItem';
import { MyCartDetail } from 'src/app/interface/myCartDetails';
import { MyCartService } from 'src/app/service/mycart';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(
    private cartItemBehaviorSubj: CartItemBehaviorSubj,
    private myCartBehaviorSubj: MyCartBehaviorSubj,
    private myCarttDetailBehaviorSubj: MyCartDetailBehaviorSubj,
    private myCartService: MyCartService
  ) { }

  itemList:CartItem[] = []
  myCartDetails: MyCartDetail[] = []
  tempData: any = []

  ngOnInit(): void {
    // this.myCartBehaviorSubj.getMycart().subscribe(data => console.log(data))
    let cartId:string| null= localStorage.getItem("cartId")

    if(cartId){
      this.myCarttDetailBehaviorSubj.getMyCartDetail().subscribe((data: any) => this.myCartDetails = data)
    }




    // this.myCarttDetailBehaviorSubj.getMyCartDetail().subscribe(data => console.log(222,data))

  }

}
