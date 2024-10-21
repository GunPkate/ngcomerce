import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/c01_navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './pages/p03_order/order/order.component';
import { MyCartComponent } from './pages/p04_mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCartBehaviorSubj } from './behaviorSubj/MyCartBehaviorSubj';


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
  providers: [MyCartBehaviorSubj],
  bootstrap: [AppComponent]
})
export class AppModule { }
