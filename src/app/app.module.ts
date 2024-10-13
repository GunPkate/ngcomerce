import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/c01_navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './pages/p03_order/order/order.component';
import { SelectitemComponent } from './pages/p04_selectitem/selectitem/selectitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    SelectitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
