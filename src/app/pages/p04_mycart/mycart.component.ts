import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    private myCartService: MyCartService,
    private myCartDetailBehaviorSubj: MyCartDetailBehaviorSubj,
    private sanitized: DomSanitizer,
  ) { }

  itemList:CartItem[] = []
  myCartDetails: MyCartDetail[] = []
  tempData: any = []

  ngOnInit(): void {


    let cartId:string| null= localStorage.getItem("cartId")

    if(cartId){
      this.myCartService.loadCartDetail2(cartId)
    }

    if(cartId){
      this.myCartDetailBehaviorSubj.getMyCartDetail().subscribe((data: any) => this.myCartDetails = data)
    }




    // this.myCarttDetailBehaviorSubj.getMyCartDetail().subscribe(data => console.log(222,data))

  }

  setColor(value: string, size: string, colorValue: string){
    let color = this.sanitized.bypassSecurityTrustHtml(
      `
      <div style ="background-color: black; width: 60px; height: 60px; margin: 5px !important; border-radius: 15px; display: flex;justify-content: center; align-items: center;">
        <div style ="background-color: #eee; width: 50px; height: 50px;border-radius: 10px; display: flex;justify-content: center; align-items: center;">
          <div style ="background-color: ${value}; width: 40px; height: 40px; border-radius: 5px;">
          </div>
        </div>
      </div>
      <div style=" display: flex;justify-content: center; align-items: center;"> (${size} ${colorValue}) </div>`
    )
    return color
  }
}
