import { NgModule } from '@angular/core';
import { ItemlistComponent } from './itemlist.component';
import { CategoryComponent } from 'src/app/components/c03_product_category/category.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemlistComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'order', component: ItemlistComponent},
      {path: 'order/:id', component: ItemlistComponent},
    ])
  ],
  providers: [],
  bootstrap: [ItemlistComponent]
})
export class itemlistPageModule { }
