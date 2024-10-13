import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CategoryComponent {
  title = 'ngcomerce';
  list = [
    {
      name: "1",
      price: 10
    },
    {
      name: "2",
      price: 20
    },
    {
      name: "3",
      price: 30
    },
    {
      name: "4",
      price: 40
    },
    {
      name: "5",
      price: 50
    },
  ]
}
