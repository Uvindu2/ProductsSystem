import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IProduct, Product } from '../Models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

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

  constructor(private fb: FormBuilder,private productService:ProductService) { }
  ngOnInit(): void {

  }
  save() {
    const product = this.createFrom();
    console.log(product);
    this.productService.createProduct(product).subscribe((res)=>{
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
}
