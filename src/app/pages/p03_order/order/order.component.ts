import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitialProduct, Product } from 'src/app/interface/product';
import { InitialProductImg, productImg } from 'src/app/interface/productImg';

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

  selectItem: Product = InitialProduct.InitialProduct()
  selectImg =""
  imgAll: productImg[] = []
  ngOnInit(): void {
    let a: any = this.router.url.split("/")
    console.log(a[2])
    Promise.all(
      [
      this.http.post("http://localhost:3000/order/product",{ id: a[2]}).subscribe(
        (res: any)=>{ 
          this.selectItem.name = res[0].name
          console.log(res[0])

          res[0].img_url.forEach((e: productImg) => { this.imgAll.push(e)});
          this.selectImg = this.imgAll[0].img_url
          this.imgList = this.imgAll.filter(x=> parseInt(x.img_code) <= 3);

          // this.selectItem.details.price = res[0].details.price
        }   
      )
      ]
    )

    if( a[2] > 3){
      this.title = a[2] 
    }

  }
  
  changeImg(value: number){
    this.page += value
    this.imgList = [];
    let limitMax = 3 * this.page;
    let limitMin = limitMax - 3 +1;
    
    // this.selectImg = this.imgAll[0+value].img_url

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
    console.log(this.imgList)
  }
}
