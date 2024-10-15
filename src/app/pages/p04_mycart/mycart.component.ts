import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor() { }

  itemlist = [1,2,3,4]

  ngOnInit(): void {
  }

}
