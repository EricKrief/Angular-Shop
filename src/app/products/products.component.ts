import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[];
  @Output() showProductDetails = new EventEmitter<Product>();
  @Output() addItem = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();
  title = "Buy our products!";
  categorySelected: string;

  constructor() { }
  ngOnInit() {
    this.categorySelected = "All";
  }

  changeProductDisplay(displayTitle: string) {
    this.categorySelected = displayTitle;
  }

  productClicked(product: Product) {
    this.showProductDetails.emit(product);
  }

  addToCart(product: Product) {
    this.addItem.emit(product);
  }

  editProduct(product: Product) {
    this.edit.emit(product);
  }

}
