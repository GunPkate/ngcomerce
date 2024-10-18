import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
})

export class CategoryComponent implements OnInit{

  catItem:any
  constructor(
    private router: Router,
    private http:HttpClient
  ){ }

  title = 'ngcomerce';
  list :any

  ngOnInit(): void {

    let setProduct = this.router.url.split("/")
    this.http.post('http://localhost:3000/product/selectProduct',{page: setProduct[1]}).subscribe((res) =>  {
      if(res){
        this.catItem = res
      }
      this.list = this.catItem
      console.log(this.catItem)
    })
    console.log(setProduct)
    // throw new Error('Method not implemented.');
  }
}
