import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoginService } from '../login/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { ILogin, Login } from '../Models/login.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  session:any='';
  login=new Login();
  user: User[] = [];
  // User=new User();
  public displayedColumns =  ['name','email','createdDate','roles','action'];
  public dataSource :any= new MatTableDataSource<User>();
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver,private userService:UserService, private router: Router,private loginService:LoginService) {}


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });

  }
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
    window.location.reload();  
    })
  }
}
