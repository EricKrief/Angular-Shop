import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../cart.service';
import { PermissionService } from '../permission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  products: Product[];
  totalPrice: number;
  loggedInUsername: string;
  subsciption: Subscription;

  constructor(private cartService: CartService, private permissionService: PermissionService) { }

  ngOnInit() {
    this.loggedInUsername = this.permissionService.loggedInUsername;
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
    this.subsciption = this.cartService.productsInCart.subscribe(
      data => { this.products = data }
    )
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  changeQuantity(event, product: Product) {
    event.stopPropagation();
    if (event.target.value < 1) {
      return;
    }
    product.quantity = parseInt(event.target.value);
    product.totalPrice = (product.quantity * parseFloat(product.price.substring(0, product.price.length))).toFixed(2).toString().concat('$');
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
    this.cartService.updateNumberOfItems(this.loggedInUsername);
  }

  quantityClicked(event) {
    event.stopPropagation();
  }


  removeProduct(product: Product) {
    this.cartService.removeProduct(product, this.loggedInUsername);
    this.totalPrice = parseFloat(this.cartService.getTotalPrice(this.loggedInUsername).toFixed(2));
    this.cartService.updateNumberOfItems(this.loggedInUsername);
  }


}
