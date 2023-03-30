import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  myForm: any;
  cus_id: any;
  customerDetails: any 
customer=new Customer()
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute,private customerService: CustomerService) { }



  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.cus_id = params['id']
    })

    this.getCustomer()

    this.myForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      telephone: ['', Validators.required],
      nic: ['', Validators.required],
      email:['',Validators.required]

      
		});
  }
  getCustomer(){
    this.customerService.getCustomerById(this.cus_id).subscribe((res)=>{

     this.customerDetails=res
    console.log(this.customerDetails);
   })
   
  }
  private updateForm(customer: Customer): void {
    this.myForm.patchValue({
      firstName:customer.firstName,
      lastName:customer.lastName,
      address:customer.address,
      postalCode:customer.postalCode,
      telephone:customer.telephone,
      nic:customer.nic,
      email:customer.email,
        
    });
  }


  private updateCustomer(customer: Customer): void {
    customer.firstName= this.myForm.value.firstName;
    customer.lastName= this.myForm.get(['lastName']).value;
    customer.address= this.myForm.get(['address']).value;
    customer.postalCode= this.myForm.get(['postalCode']).value;
    customer.telephone= this.myForm.get(['telephone']).value;
    customer.nic= this.myForm.get(['nic']).value;
    customer.email= this.myForm.get(['email']).value;

  }

  

  onSubmit(){
    // let data = {
    //   "firstName": this.myForm.value.firstName,
    //   "lastName": this.myForm.value.lastName,
    //   "address": this.myForm.value.address,
    //   "postalCode": this.myForm.value.postalCode,
    //   "telephone": this.myForm.value.telephone,
    //   "nic": this.myForm.value.nic,
    //   "email":this.myForm.value.email
    // }

    this.updateCustomer(this.customer)
    this.customerService.updateCustomerById(this.cus_id,this.customer).subscribe(()=>{

     alert('Update Successfully')
      this.router.navigate(['/table']);
    })
    
  }

}
