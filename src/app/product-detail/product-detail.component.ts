import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   id :any;
   product:Product = new Product();

  constructor(private _route:ActivatedRoute,private _productService:ProductService,
    private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  this.id =  this._route.snapshot.paramMap.get('id');
  this._productService.getProductById(this.id).subscribe(result =>{
    this.product = result;
    console.log(result);
    
  })
    
  }

  deleteProduct(){
    this._http.delete(`http://localhost:3000/products/${this.id}`).subscribe(result =>{
      alert('Product Deleted Sucessfully');
      this._router.navigate(['/manage-products']);
    })
  }

}
