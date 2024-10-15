import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  constructor(private router:Router) { }
  title: string = "My Order"
  imgList = [
    {name:"a"},
    {name:"b"},
    {name:"c"},
    {name:"d"},
    {name:"e"}
  ]

  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    if( a[2] > 3){
      this.title = a[2] 
    }
  }
  
  changeImg(value: number){

  }
}
