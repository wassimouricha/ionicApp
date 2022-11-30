import { Component , OnInit} from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  products: any[] = [];
  constructor( private service: ProductService) {}

  ngOnInit() {
    this.getProduct()
  }

  private getProduct(){

    this.service.getAllProducts().subscribe(response => this.products = [...response.products])
    
   }

   private generateProduct(){

    this.service.getProductSkip(this.products.length).subscribe(response => this.products.push(...response.products));
   }

   onIonInfinite(ev: any) {
    this.generateProduct();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
