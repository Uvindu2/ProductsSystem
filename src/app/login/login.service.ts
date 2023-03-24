import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


   
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 session:any=null;

  private url = 'http://127.0.0.1:8000/api/login/';
  private url2 = 'http://127.0.0.1:8000/api/logout/';

  
  constructor(private httpClient: HttpClient) { }

  login(data:any){
   
    return this.httpClient.post(this.url,data);
  }
  logOut(){
    this.session=sessionStorage.getItem('token');
   const token=this.session.replaceAll('"', '');
   const head_obj=new HttpHeaders().set("Authorization","Bearer "+token);
    return this.httpClient.post(this.url2,{headers:head_obj});

  }
  
}