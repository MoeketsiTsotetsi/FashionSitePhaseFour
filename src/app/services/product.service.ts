import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  backend_url = "/api";
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this._http.get<Product[]>(this.backend_url+"/products/");
  }

  getProductById(id:any): Observable<Product> {
      return this._http.get<Product>(this.backend_url+"/products/"+id);
  }
}
