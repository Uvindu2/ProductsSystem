import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product.model';

   
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://localhost:44373/api/products/';
  private url1 = 'http://localhost:8000/product/save';
  
  constructor(private httpClient: HttpClient) { }
   
  getProducts(){
    return this.httpClient.get(this.url);
  }
  createProduct(productDetails:Product){
    return this.httpClient.post(this.url,productDetails);
  }
  updateProduct(id:any,productDetails:Product){
    console.log(this.url+id,productDetails);
    return this.httpClient.put(this.url+id,productDetails);
  }
  getProductById(id:any){
    return this.httpClient.get(this.url+id);
  }
}