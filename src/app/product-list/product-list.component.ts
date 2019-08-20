import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() categorySelected: string;
  @Output() showProductDetails = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }
  ngOnInit() {
  }

  productClicked(product: Product) {
    this.showProductDetails.emit(product);
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
    this.addToCart.emit(product);
  }

}
