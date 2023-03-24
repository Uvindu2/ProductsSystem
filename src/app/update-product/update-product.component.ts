import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IProduct, Product } from '../Models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {

  product: IProduct = new Product();
  editForm = this.fb.group({
    id: [],
    productName: ['', Validators.required],
    productCategory: ['', Validators.required],
    unitPrice: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
    colour: ['', Validators.required],
    model: ['', Validators.required],
    quantity:['',Validators.required],
    hideRequired: false,
    floatLabel: 'auto',

  });
 

  constructor(private fb: FormBuilder,private productService:ProductService,private route:ActivatedRoute) { }
  ngOnInit(): void {


    this.route.params.subscribe((params) => {
      this.product.id = params['id'];
      this.getProductById(this.product.id);
   
  })
}
getProductById(pid:any){

  this.productService.getProductById(pid).subscribe((res)=>{

    this.product=res;
    this.updateForm(res);

  })
}
  save() {
    const product = this.createFrom();
    console.log(product);
    this.productService.updateProduct(this.product.id,product).subscribe((res)=>{
      if(res!==null){
        alert("Product Added Successfully")
      }else{
        alert("Product Not Addded");

      }
  
    })

  }

  private createFrom(): IProduct {
    return {
      ...new Product(),
      productName: this.editForm.get(['productName'])?.value,
      prodctCategory: this.editForm.get(['productCategory'])?.value,
      unitPrice: this.editForm.get(['unitPrice'])?.value,
      imageUrl: this.editForm.get(['imageUrl'])?.value,
      description: this.editForm.get(['description'])?.value,
      colour: this.editForm.get(['colour'])?.value,
      model: this.editForm.get(['model'])?.value,
      quantity:this.editForm.get(['quantity'])?.value,
      cartStatus:false


    };
  }
  updateForm(product:IProduct){
    this.editForm.patchValue({
      productName: product.productName,
      // prodctCategory:product.prodctCategory,
      unitPrice:String(product.unitPrice),
      imageUrl: product.imageUrl,
      description:product.description,
      colour: product.colour,
      model: product.model,
      quantity:String(product.quantity),
    })
  }


}
