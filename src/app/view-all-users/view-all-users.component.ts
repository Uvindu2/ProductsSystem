import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Login } from '../Models/login.model';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss']
})
export class ViewAllUsersComponent implements OnInit{
  login=new Login();
  user: User[] = [];
  // User=new User();
  public displayedColumns =  ['name','email','createdDate','roles','action'];
  public dataSource :any= new MatTableDataSource<User>();
  session: any | null;

  constructor(private userService:UserService,private loginService:LoginService,private router:Router){}

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngOnInit(){

    this.session=sessionStorage.getItem('email');
    this.login.email=this.session.replaceAll('"', '');
    
this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.dataSource.data = res

    })
  }
  deleteUser(id:any){

      this.userService.deleteById(id).subscribe((res)=>{
        window.location.reload();
        alert("Deleted Successfully");
      })
  }

  
  logOut(){
    this.loginService.logOut().subscribe(()=>{
      alert('Log out');
      const token=sessionStorage.removeItem('token');
      console.log(token);
    this.router.navigate(['']);     
    })
  }
}
