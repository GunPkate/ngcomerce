import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  constructor( private router:Router, private http: HttpClient) { }
  title: string = "My Order"
  imgList:any = []
  page: number = 1
  imgAll: any
  selectItem: any
  selectImg =""

  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    console.log(a[2])
    Promise.all(
      [
      this.http.post("http://localhost:3000/order/product",{ id: a[2]}).subscribe(
        (res)=>{ 
          this.selectItem = res
          this.imgAll = this.selectItem[0].img_url
          this.selectImg = this.selectItem[0].img_url[0].img_url
          console.log(res)
        }   
      )
      ]
    )

    if( a[2] > 3){
      this.title = a[2] 
    }
    this.changeImg(0);
  }
  
  changeImg(value: number){
    this.page += value
    this.imgList = [];
    let limitMax = 3 * this.page;
    let limitMin = limitMax - 3 +1;
    if(this.imgAll.length >= limitMax){
      for (let i = 0; i < limitMax; i++) {
        this.imgList.push(this.imgAll[i])
      }
    }else{
      for (let i = 0 + limitMin - 1; i < limitMax; i++) {
        if(this.imgAll.length - 1){
          this.imgList.push(this.imgAll[i])
        }else{
          this.imgList.push({name:""})
        }
      }
    }
  }
}
