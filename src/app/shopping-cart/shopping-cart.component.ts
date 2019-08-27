import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../cart.service';
import { PermissionService } from '../permission.service';

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
  loggedInUsername: string;

  constructor(private cartService: CartService, private permissionService: PermissionService) { }

  ngOnInit() {
    this.loggedInUsername = this.permissionService.loggedInUsername;
    this.products = this.cartService.getProducts(this.loggedInUsername);
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
  }

  changeQuantity(event, product: Product) {
    if (event.target.value < 1) {
      return;
    }
    this.updateProductCount.emit(parseInt(event.target.value) - product.quantity);
    product.quantity =parseInt(event.target.value);
    product.totalPrice = (product.quantity * parseFloat(product.price.substring(0, product.price.length))).toFixed(2).toString() + '$';
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
  }


  removeProduct(product: Product) {
    this.cartService.removeProduct(product, this.loggedInUsername);
    this.removeItem.emit(product);
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
  }


}
