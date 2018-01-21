import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product:Product;
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService
  ) { }

  getProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .subscribe(p=> this.product = p);
  }
  ngOnInit() {
    this.getProduct();
  }

}
