import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'view', component: ViewProductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: '', component: LoginComponent },
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'view-users', component: ViewAllUsersComponent },
  { path: 'update-users/:id', component: UpdateUserComponent },
  { path: 'register', component: RegisterUserComponent },








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
