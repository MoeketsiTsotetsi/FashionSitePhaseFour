import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product:Product = new Product();
backend_url = "/api";
id:any;
  constructor(private _route:ActivatedRoute,private _http:HttpClient,private _productService:ProductService,
    private _router:Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._productService.getProductById(this.id).subscribe(result =>{
      this.product = result;
    },error =>{
      console.log(error);
      
    })
  }

  updateProduct(){
    this._http.patch(this.backend_url+"/products/" + this.id,this.product).subscribe(result =>{
      alert('Product Successfully Updated');
      this._router.navigate(['/products']);

    },error =>{
      console.log(error);
      
    })
  }

}
