import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser, User } from '../Models/user';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Login } from '../Models/login.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  login=new Login();
  session: any | null;

  constructor(private fb: FormBuilder, private userService: UserService,private loginService:LoginService,private router:Router) { }

  editForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    email: ['', Validators.required],
    roles: ['', Validators.required],
    email_verified_at: ['', Validators.required],
    created_at: [''],
    updated_at: [''],

  });
  ngOnInit() {

    
    this.session=sessionStorage.getItem('email');
    this.login.email=this.session.replaceAll('"', '');

    this.userService.getUserById().subscribe((res) => {
      console.log(res);
      this.updateForm(res);
    })
  }

  updateForm(user: IUser) {
console.log(user);
    this.editForm.patchValue({
      id: user.id,
      name: user.name,
      email: String(user.email),
      email_verified_at: user.email_verified_at,
      roles: String(user.roles),
      created_at: String(user.created_at),
      updated_at: String(user.updated_at),

    })
  }
  private createFrom(): IUser {
    return {
      ...new User(),
      id: this.editForm.get(['id'])?.value,
      name: this.editForm.get(['name'])?.value,
      email: this.editForm.get(['email'])?.value,
      roles: this.editForm.get(['roles'])?.value,
      created_at: this.editForm.get(['created_at'])?.value,
      updated_at: this.editForm.get(['updated_at'])?.value,

    };
  }


  save() {
    const user = this.createFrom();
    this.userService.updateUser(user.id, user).subscribe(() => {
      window.location.reload();
      alert(" Profile Updated");

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

