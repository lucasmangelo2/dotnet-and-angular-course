import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  insert(product: Product) : Observable<Product> {
    return this.http.post<Product>(environment.apiUrl + 'product', product);
  }

  getById(id: number) : Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + 'product/' + id);
  }

  getAll() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + 'product');
  }

  update(product: Product) : Observable<Product> {
    return this.http.put<Product>(environment.apiUrl + 'product', product);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete(environment.apiUrl + 'product/' + id);
  }
}
