import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser, User } from '../Models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit{
  checkbox:boolean=false;
  constructor(private fb: FormBuilder,private userService: UserService,private router:Router){}
  editForm=this.fb.group({

    name:['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    roles:  ['', Validators.required],
    created_at:  ['', Validators.required],
    updated_at: ['', Validators.required],
  })

  
  private createFrom(): IUser {
    return {
      ...new User(),
      name: this.editForm.get(['name'])?.value,
      email: this.editForm.get(['email'])?.value,
      password:this.editForm.get(['password'])?.value,
      roles: 'admin',
      created_at: this.editForm.get(['created_at'])?.value,
      updated_at: this.editForm.get(['updated_at'])?.value,

    };
  }
  ngOnInit(): void {
      
  }


register(){
const user=this.createFrom();
console.log(user);

   this.userService.createUser(user).subscribe((res)=>{
    alert("User Registered");
    this.router.navigate(['']);
   })
}
go(){
  this.checkbox=true;
}
}
