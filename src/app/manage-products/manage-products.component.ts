import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
 products:Product[] = [];

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(result =>{
      this.products = result;
      console.log(this.products);
      
    })
  }

}
