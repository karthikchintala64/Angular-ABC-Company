import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Product } from "./product";

@Injectable()
export class ProductService {
  mockProducts: Product[] = [
    { id: 1, name: 'Product 1', price:100 },
    { id: 2, name: 'Product 2', price:50 }
  ]
  constructor() { }

  getProductsList(): Observable<Product[]> {
    return of(this.mockProducts)
  }

  getProduct(id: number): Observable<Product> {
    return of(this.mockProducts.find(p => p.id === id));
  }

  addProduct(name: string): Observable<boolean> {
    let maxId = 0;
    this.mockProducts.forEach(p => {
      if (p.id > maxId)
        maxId = p.id;
    })
    this.mockProducts.push({
      id:maxId+1,
      name,
      price:1
    })
    return of(true);
  }

}
