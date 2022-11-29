import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  products: any[] = [];

  constructor(   private service: ProductService) { }

  ngOnInit() {
    this.getProduct()
  }

  private getProduct(){
    this.service.getAllProducts().subscribe(response => this.products = [...response.products])

    
   }

}
