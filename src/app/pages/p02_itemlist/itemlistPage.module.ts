import { NgModule } from '@angular/core';
import { ItemlistComponent } from './itemlist.component';
import { CategoryComponent } from 'src/app/components/c03_product_category/category.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemlistComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [ItemlistComponent]
})
export class itemlistPageModule { }
