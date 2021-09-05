import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  products: Array<Product> = [];
  cartItems: Array<Product> = [];
  productStatus: boolean = false;
 


  constructor(private _productService:ProductService,private _router:Router,private _cartService:CartService) { }

  ngOnInit(): void {
  
    this._productService.getProducts().subscribe(result =>{
      this.products = result
      console.log(this.products);
      
    },error =>{
      console.log(error);
      
    })
  
  
  }

  buyNow(product: Product) {
    this.cartItems = this._cartService.loadCartItems();
    for (var i = 0; i < this.cartItems.length; i++) {
      if (product._id == this.cartItems[i]._id) {
        alert('Product is already in cart.');
        return;
      }

    }
    this._cartService.addToCart(product);
    alert('Item added to cart!!');
    this._router.navigate(['/cart']);
  }

}
