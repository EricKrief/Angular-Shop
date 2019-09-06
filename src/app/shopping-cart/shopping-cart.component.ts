import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../cart.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

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
    event.stopPropagation();
    if (event.target.value < 1) {
      return;
    }
    product.quantity = parseInt(event.target.value);
    product.totalPrice = (product.quantity * parseFloat(product.price.substring(0, product.price.length))).toFixed(2).toString() + '$';
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
  }

  quantityClicked(event) {
    event.stopPropagation();
  }


  removeProduct(product: Product) {
    this.cartService.removeProduct(product, this.loggedInUsername);
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
  }


}
