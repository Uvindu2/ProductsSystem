import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer.model';
import { Observable } from 'rxjs';

   
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'https://localhost:44330/api/customers/';


  
  constructor(private httpClient: HttpClient) { }
   
  getCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.url).
    pipe(

    );
  }
  createCustomer(data:Customer){
    return this.httpClient.post(this.url,data);
  }
  getCustomerById(id:any):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.url+id).pipe(
      
    );
  }
  updateCustomerById(id:any,data:Customer){
    return this.httpClient.put(this.url+id,data);
  }

   
}