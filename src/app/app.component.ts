import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderService } from './service/order';
import { MyCartBehaviorSubj } from './behaviorSubj/MyCartBehaviorSubj';
import { InitialMyCart, MyCart } from './interface/myCart';

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
    private myCartBehaviorSubj: MyCartBehaviorSubj
  ){}

  ngOnInit(): void {
  let cartId:any = localStorage.getItem("cartId")
  Promise.all(
    [
      // this.orderService.loadProduct({ id: this.productCode}),
      this.orderService.loadCart(),
    ]
    
  )
  this.myCartBehaviorSubj.getMycart().subscribe((data) =>{ 
    this.myCartGlobal = data;
    if(data.id){ this.orderService.loadCartItems( data.id ) }
  })
  }
}
