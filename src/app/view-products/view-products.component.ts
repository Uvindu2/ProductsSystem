import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Product } from '../Models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit{
   product: Product[] = [];
  // product=new Product();
  public displayedColumns =  ['imageUrl','productName', 'productCategory','model','quantity','unitPrice', 'unitPrice','action'];
  public dataSource :any= new MatTableDataSource<Product>();

  constructor(private productService:ProductService){}

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngOnInit(){
this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.dataSource.data = res
      console.log(this.product);
    })
  }
}




