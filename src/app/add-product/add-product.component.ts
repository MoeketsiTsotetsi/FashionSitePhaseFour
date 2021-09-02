import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product = new Product();
  
  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this._http.post(`http://localhost:3000/products/`,this.product).subscribe(result =>{
      console.log(result);
      alert('Product Added Successfully');
      this._router.navigate(['/manage-products']);

      
    },error =>{
      console.log(error);
      
    })

  }

}
