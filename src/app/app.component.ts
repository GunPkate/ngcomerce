import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from './service/order';
import { MyCartBehaviorSubj } from './behaviorSubj/MyCartBehaviorSubj';
import { InitialMyCart, MyCart } from './interface/myCart';
import { MyCartDetailBehaviorSubj } from './behaviorSubj/myCartDetailBehaviorSubj';
import { MyCartService } from './service/mycart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'ngcomerce';
  myCartGlobal: MyCart = InitialMyCart.initialMyCart();

  constructor( 
    private orderService: OrderService,
    private myCartBehaviorSubj: MyCartBehaviorSubj,
    private myCartDetailBehaviorSubj: MyCartDetailBehaviorSubj,
    private myCartService: MyCartService
  ){}

  async ngOnInit(): Promise<void> {
  let cartId:string| null= localStorage.getItem("cartId")


    if(cartId){
      await this.myCartService.loadCart(cartId)
      await this.myCartService.loadCartDetail2(cartId)
    }

    if(cartId){
      this.myCartDetailBehaviorSubj.getMyCartDetail()
    }

  this.myCartBehaviorSubj.getMycart().subscribe((data) =>{ 
    this.myCartGlobal = data;
    if(data.id){ this.orderService.loadCartItems( data.id ) }
  })
  
  this.myCartBehaviorSubj.getMycart() 
  this.myCartDetailBehaviorSubj.getMyCartDetail().subscribe((data) =>{ console.log(data) })
  }
}
