import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModule } from './pages/p01_main/mainpage.module';
import { MainPageComponent } from './pages/p01_main/mainpage.component';
import { ItemlistComponent } from './pages/p02_itemlist/itemlist.component';
import { itemlistPageModule } from './pages/p02_itemlist/itemlistPage.module';
import { OrderComponent } from './pages/p03_order/order/order.component';
import { MyCartComponent } from './pages/p04_mycart/mycart.component';


const routes: Routes = [
  {path: '', component: MainPageComponent  },
  {path: 'itemlist', component: ItemlistComponent  },
  {path: 'order', component: OrderComponent  },
  {path: 'order/:id', component: OrderComponent  },
  {path: 'select', component: MyCartComponent  },
  {path: '', redirectTo: '', pathMatch: 'full' },
//   {path: 'category', lo: <div>1234<div/> },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }