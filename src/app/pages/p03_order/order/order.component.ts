import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router:Router) { }
  title: string = "My Order"

  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    if( a[2] > 3){
      this.title = "Order Plus" 
    }
  }

}
