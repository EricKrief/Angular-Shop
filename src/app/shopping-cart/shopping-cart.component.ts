import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Output() removeItem = new EventEmitter<Product>();
  @Output() updateProductCount = new EventEmitter<number>();
  emptyCartText = 'Your cart is empty!';
  products: Product[];
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.totalPrice = parseFloat(this.cartService.getTotalPrice().toFixed(2));
  }

  changeQuantity(event, product: Product) {
    if (event.target.value < 1) {
      return;
    }
    this.updateProductCount.emit(event.target.value - product.quantity);
    product.quantity = event.target.value;
    product.totalPrice = (product.quantity * parseFloat(product.price.substring(0, product.price.length))).toFixed(2).toString() + '$';
    this.totalPrice = parseFloat(this.cartService.getTotalPrice().toFixed(2));
  }


  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.removeItem.emit(product);
    this.totalPrice = parseFloat(this.cartService.getTotalPrice().toFixed(2));
  }


}
