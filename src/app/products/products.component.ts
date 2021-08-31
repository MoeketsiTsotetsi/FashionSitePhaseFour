import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
 
  products:Product[] = [];


  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  
    this._productService.getProducts().subscribe(result =>{
      this.products = result
      console.log(this.products);
      
    },error =>{
      console.log(error);
      
    })
  
  
  }

}
