import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './mainpage.component';

import { MainComponent } from '../../components/c02_main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainPageModule { }
