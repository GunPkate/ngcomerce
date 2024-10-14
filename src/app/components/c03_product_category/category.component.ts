import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

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

  constructor(private router: Router){}

  title = 'ngcomerce';
  list = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    { id: 4, title: 'Item 4', description: 'Description for Item 4' },
    { id: 5, title: 'Item 5', description: 'Description for Item 5' },
    { id: 6, title: 'Item 6', description: 'Description for Item 6' }
  ]

  ngOnInit(): void {
    let setProduct = this.router.url.split("/")
    if(setProduct[1] === ""){
      this.list = [
        { id: 1, title: 'Item 1', description: 'Description for Item 1' },
        { id: 2, title: 'Item 2', description: 'Description for Item 2' },
        { id: 3, title: 'Item 3', description: 'Description for Item 3' },
      ]
    }
    console.log(setProduct)
    // throw new Error('Method not implemented.');
  }
}
