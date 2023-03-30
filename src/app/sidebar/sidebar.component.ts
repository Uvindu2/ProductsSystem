import { Component, OnInit, ViewChild, resolveForwardRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { catchError, delay, filter, map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoginService } from '../login/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { ILogin, Login } from '../Models/login.model';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product.model';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  session: any = '';
  login = new Login();
  product: Product[] = [];
  // User=new User();
  public displayedColumns = ['imageUrl', 'productName', 'productCategory', 'model', 'quantity', 'unitPrice', 'unitPrice', 'action'];
  public dataSource: any = new MatTableDataSource<Product>();
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private httpClient: HttpClient,private observer: BreakpointObserver, private productService: ProductService, private router: Router, private loginService: LoginService) { }


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
  ngOnInit() {

    //  this.session=sessionStorage.getItem('email');
    //  this.login.email=this.session.replaceAll('"', '');

    this.getAllProducts();
  }





  getAllProducts() {
      this.productService
      .getProducts()
      .subscribe((data:any) => {
     
        this.dataSource = data.listProduct;
        console.log(this.product);
      });
    }

  // deleteUser(id:any){

  //     this.productService.deleteById(id).subscribe((res)=>{
  //       window.location.reload();
  //       alert("Deleted Successfully");
  //     })
  // }



  logOut() {
    this.loginService.logOut().subscribe(() => {
      alert('Log out');
      const token = sessionStorage.removeItem('token');
      console.log(token);
      this.router.navigate(['']);
      window.location.reload();
    })
  }
}
