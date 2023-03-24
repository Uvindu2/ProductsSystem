import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';

   
@Injectable({
  providedIn: 'root'
})
export class UserService {
session:any=sessionStorage.getItem('token');
token=this.session.replaceAll('"', '');

head_obj=new HttpHeaders().set("Authorization","Bearer "+this.token);

  private url = 'http://127.0.0.1:8000/api/user/';
  private url2='http://127.0.0.1:8000/api/user-profile/'
  private url3='http://127.0.0.1:8000/api/register/'

  constructor(private httpClient: HttpClient) { }
   
  getUsers(){
    return this.httpClient.get(this.url,{headers:this.head_obj});
  }
  createUser(user:User){
    return this.httpClient.post(this.url3,user);
  }
  updateUser(id:any,user:User){
    console.log(this.url+id,user);
    return this.httpClient.put(this.url+id,user,{headers:this.head_obj});
  }
  getUserById(){
    return this.httpClient.get(this.url2,{headers:this.head_obj});
  }
  findUserById(id:any){
    return this.httpClient.get(this.url+id,{headers:this.head_obj});
  }
  deleteById(id:any){
    return this.httpClient.delete(this.url+id,{headers:this.head_obj});
  }
}