import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ViewProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    LoginComponent,
    ViewProfileComponent,
    ViewAllUsersComponent,
    UpdateUserComponent,
    RegisterUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
