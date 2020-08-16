import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  list: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.getAllProducts();
  }

  getAllProducts(){
    this.service
      .getAll()
      .subscribe(list => {
        this.list = list;
      })
  }

  onInsertClick(){
    this.service
      .insert(this.product)
      .subscribe(x => {
        this.clear();
        this.getAllProducts();
      });
  }

  onUpdateClick(){
    this.service
      .update(this.product)
      .subscribe(x => {
        this.product = x;
        this.getAllProducts();
      });
  }

  onDeleteClick(){
    this.service
      .delete(this.product.Id)
      .subscribe(() => {
        this.clear();
        this.getAllProducts();
      });
  }

  clear(){
    this.product = new Product();
  }

  onSelectProductClick(item: Product) {
    this.product = item;
  }
}
