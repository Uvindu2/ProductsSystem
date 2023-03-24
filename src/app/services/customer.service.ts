import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer.model';

   
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'https://localhost:44373/api/customers/';
  private url1 = 'http://localhost:8000/customer/save';

  
  constructor(private httpClient: HttpClient) { }
   
  getCustomer(){
    return this.httpClient.get(this.url);
  }
  createCustomer(data:Customer){
    return this.httpClient.post(this.url,data);
  }
  getCustomerById(id:any){
    return this.httpClient.get(this.url+id);
  }
  updateCustomerById(id:any,data:Customer){
    return this.httpClient.put(this.url+id,data);
  }

   
}