import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { Login } from '../Models/login.model';

   
@Injectable({
  providedIn: 'root'
})
export class UserService {
session:any=sessionStorage.getItem('token');
token=this.session.replaceAll('"', '');

head_obj=new HttpHeaders().set("Authorization","Bearer "+this.token);

  private url1= 'https://localhost:44330/api/customers/';
  private url3='https://localhost:44330/api/products/'
  private url='https://localhost:44330/api/users/'
  private url2='https://localhost:44330/api/users/GetUserByEmail/'


  constructor(private httpClient: HttpClient) { }
   
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url,{headers:this.head_obj}).pipe(

    );
  }
  createUser(user:User){
    return this.httpClient.post(this.url3,user);
  }
  updateUser(id:any,user:User){
    console.log(this.url+id,user);
    return this.httpClient.put(this.url+id,user);
  }
  // getUserById(){
  //   return this.httpClient.get(this.url2);
  // }
  findUserById(id:any):Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+id,{headers:this.head_obj}).pipe(

    );
  }
  getUserByEmail(email:string):Observable<User[]>{
    return this.httpClient.get<User[]>(this.url2+email,{headers:this.head_obj}).pipe(

    );
  }
  deleteById(id:any){
    return this.httpClient.delete(this.url+id,{headers:this.head_obj});
  }
}