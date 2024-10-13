import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './mainpage.component';

import { MainComponent } from '../../components/c02_main/main.component';
import { CategoryComponent } from 'src/app/components/c03_product_category/category.component';

@NgModule({
  declarations: [
    MainComponent,
    MainPageComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainPageModule { }
