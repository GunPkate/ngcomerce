import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageModule } from './pages/p01_main/mainpage.module';
import { MainPageComponent } from './pages/p01_main/mainpage.component';


const routes: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: MainPageComponent  },
  {path: '', component: MainPageComponent  },
//   {path: 'category', lo: <div>1234<div/> },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }