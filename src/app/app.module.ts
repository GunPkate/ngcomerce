import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/c01_navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './pages/p03_order/order/order.component';
import { MyCartComponent } from './pages/p04_mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCartBehaviorSubj } from './behaviorSubj/MyCartBehaviorSubj';
import { CartItemBehaviorSubj } from './behaviorSubj/cartItemBehaviorSubj';
import { OrderService } from './service/order';
import { OrderProductBehaviorSubj } from './behaviorSubj/orderProductBehaviorSubj';
import { MyCartService } from './service/mycart';
import { MyCartDetailBehaviorSubj } from './behaviorSubj/myCartDetailBehaviorSubj';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    MyCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MyCartBehaviorSubj,
    CartItemBehaviorSubj,
    OrderProductBehaviorSubj,
    MyCartDetailBehaviorSubj,
    OrderService,
    MyCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
