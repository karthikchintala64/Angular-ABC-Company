import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from "./app.component";

const ROUTES: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', loadChildren:'./home/home.module#HomeModule'},
  { path:'products', loadChildren:'./products/products.module#ProductsModule'},
  { path:'customers', loadChildren:'./customers/customers.module#CustomersModule'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
