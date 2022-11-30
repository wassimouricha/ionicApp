import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL_PATH = "/products"
  constructor( private http: HttpClient) { }


   getAllProducts() : Observable<any> {
    return this.http.get(environment.url + this.URL_PATH + `?limit=10`)
  }

  getProductSkip(number: number): Observable<any> {
    return this.http.get(environment.url + this.URL_PATH + `?limit=10&skip=${number}`)
  }
}
