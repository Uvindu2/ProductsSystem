import { Component} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Subject, filter, takeUntil, take } from 'rxjs';
import { LoginService } from './login.service';
import { IUser, User } from '../Models/user';
import { Login } from '../Models/login.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  login=new Login();
  user=new User();
  public loginValid = true;
  public email = '';
  public password = '';

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder,
    private loginService: LoginService

  ) {}

  public ngOnInit(): void {
   
       
  }


  public onSubmit(): void {
    this.loginValid = true;
    const data={
    email: this.loginForm.get(['email'])?.value,
    password: this.loginForm.get(['password'])?.value,
    }
    console.log(data);
    this.loginService.login(data).subscribe((res)=>{
      if(res!=null){
      this.login=res;
    
    sessionStorage.setItem('email',JSON.stringify(this.login.email));
    sessionStorage.setItem('token',JSON.stringify(this.login.token));

      this._router.navigate(['/sidebar']);
      }
      else{
        alert("invalid email or password")
      }
    })
  }
  
  }
