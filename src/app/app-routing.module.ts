import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'manage-products',component:ManageProductsComponent},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent},
  {path:'user-details/:id',component:UserDetailComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
