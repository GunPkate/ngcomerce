import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModule } from './pages/p01_main/mainpage.module';
import { MainPageComponent } from './pages/p01_main/mainpage.component';
import { ItemlistComponent } from './pages/p02_itemlist/itemlist.component';
import { itemlistPageModule } from './pages/p02_itemlist/itemlistPage.module';


const routes: Routes = [
  // {path: '**', redirectTo: '', pathMatch: 'full' },
  {path: '', component: MainPageComponent  },
  {path: 'itemlist', component: ItemlistComponent  },
//   {path: 'category', lo: <div>1234<div/> },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }