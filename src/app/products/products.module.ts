import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
  ],
  declarations: [ProductsComponent, ProductDetailComponent, NewProductComponent],
  providers: [ProductService]
})
export class ProductsModule { }
