import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/model/product';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() categorySelected: string;
  @Output() showProductDetails = new EventEmitter<Product>();
  @Output() editProduct = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();
  loggedInUsername: string;

  constructor(private cartService: CartService, private permissionService: PermissionService) { }
  ngOnInit() {
    this.loggedInUsername = this.permissionService.loggedInUsername;
  }

  productClicked(product: Product) {
    this.showProductDetails.emit(product);
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product, this.loggedInUsername);
    this.addToCart.emit(product);
  }

  editClicked(product: Product) {
    this.editProduct.emit(product);
  }

}
