import { Component, OnInit } from '@angular/core';
import { CartItemBehaviorSubj } from 'src/app/behaviorSubj/cartItemBehaviorSubj';
import { MyCartBehaviorSubj } from 'src/app/behaviorSubj/MyCartBehaviorSubj';
import { MyCarttDetailBehaviorSubj } from 'src/app/behaviorSubj/myCartDetailBehavior';
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
    private myCarttDetailBehaviorSubj: MyCarttDetailBehaviorSubj,
    private myCartService: MyCartService
  ) { }

  itemList:CartItem[] = []
  myCartDetails: MyCartDetail[] = []
  tempData: any = []

  ngOnInit(): void {
    // this.myCartBehaviorSubj.getMycart().subscribe(data => console.log(data))
    this.cartItemBehaviorSubj.getCartItemList().subscribe(data =>{
      this.itemList = (data) 
      if(this.itemList.length > 0){
        for (let i = 0; i < this.itemList.length; i++) {
          let cartItemDetail = {
            priductId: this.itemList[i].product_code ,
            variantsId: this.itemList[i] .skucode
          }
          
          this.myCartService.loadCartDetail(cartItemDetail)

        }
      }
    } )



    // this.myCarttDetailBehaviorSubj.getMyCartDetail().subscribe(data => console.log(222,data))

  }

}
