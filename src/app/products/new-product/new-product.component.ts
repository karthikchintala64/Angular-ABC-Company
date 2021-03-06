import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private prodcutService:ProductService) { }

  addProduct(name:string){
    this.prodcutService.addProduct(name)
    .subscribe();
  }
  ngOnInit() {
  }

}
