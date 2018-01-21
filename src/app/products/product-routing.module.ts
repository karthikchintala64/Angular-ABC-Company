import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from "./new-product/new-product.component";

const ROUTES: Routes = [
  { path: '', component: ProductsComponent },
  { path:'add', component:NewProductComponent  },
  { path:':id', component:ProductDetailComponent  }  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class ProductRoutingModule { }
