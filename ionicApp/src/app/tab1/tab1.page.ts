import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: any[] = [];
  constructor( private service: ProductService) {}

  ngOnInit() {
    this.getProduct()
  }

  private getProduct(){
    this.service.getAllProducts().subscribe(response => this.products = [...response.products])

    
   }

}
