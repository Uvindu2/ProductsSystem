import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct, Product } from '../Models/product.model';
import { map, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';

   
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 session:any=sessionStorage.getItem('token');
 token=this.session.replaceAll('"', '');
head_obj=new HttpHeaders().set("Authorization","Bearer "+this.token);

  private url = 'https://localhost:44330/api/products/';
  private url1 = 'http://localhost:8000/product/save';
  
  constructor(private httpClient: HttpClient) { }
   
  // return  this.productService.getProducts().
        // pipe(
        //    map((data: Product[]) => {
        //      return data;
        //    }), catchError( error => {
        //      return throwError( 'Something went wrong!' );
        //    })
        // )

 
        getProducts(): Observable<Product[]> {
          return this.httpClient.get<Product[]>(this.url,{headers:this.head_obj})
            .pipe(
             
            );
        }
    
  createProduct(productDetails:Product){
    return this.httpClient.post(this.url,productDetails,{headers:this.head_obj});
  }
  updateProduct(id:any,productDetails:Product){
    console.log(this.url+id,productDetails);
    return this.httpClient.put(this.url+id,productDetails,{headers:this.head_obj});
  }
  getProductById(id:any): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url+id,{headers:this.head_obj})
    .pipe(
             
      );
  }
}