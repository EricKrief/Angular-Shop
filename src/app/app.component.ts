import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { DataService } from './data.service';
import { CartService } from './cart.service';
import { Product } from 'src/model/product';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('state', [
      transition(':enter', [
        style({ display: 'block', zIndex: 0, opacity: 0 }),
        animate('1000ms ease-in')
      ])
    ]),
    trigger('notifier', [
      transition(':leave', [
        animate('1000ms ease-in', style({ opacity:'0'}))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {


  notifier = false;
  productName: string;
  categories: Category[];
  products: Product[];
  displayPage = "home";
  product: Product;
  showMenu = false;
  cartNumberOfItems = 0;
  shoppingCartMenuItemText = 'shopping cart (0)';
  addedItems: string[] = [];

  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.categories = this.dataService.getCategories();
    this.products = this.dataService.getProducts();
  }


  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  backClicked(): void {
    this.displayPage = "products";
  }

  showProductDetails(product: Product): void {
    this.displayPage = "details";
    this.product = product;
  }

  changePage(requestedPage: string): void {
    this.displayPage = requestedPage;
  }

  addItem(product: Product): void {
    if (this.productAlreadyInCart(product)) {
      this.showNotifier(product.title);
      return;
    }

    this.cartNumberOfItems++;
    this.addedItems.push(product.title);
    this.shoppingCartMenuItemText = 'shopping cart (' + this.cartNumberOfItems + ')';
  }

  showNotifier(productName: string) {
    this.productName = productName;
    this.notifier = true;
    setTimeout(() => { this.notifier = false; }, 4000);
  }

  productAlreadyInCart(product: Product): boolean {
    for (let i = 0; i < this.addedItems.length; i++) {
      if (product.title === this.addedItems[i]) {
        return true;
      }
    }
    return false;
  }

  removeProduct(product: Product): void {
    let index: number;
    for (let i = 0; i < this.addedItems.length; i++) {
      if (product.title === this.addedItems[i]) {
        index = i;
      }
    }
    this.cartNumberOfItems -= product.quantity;
    this.addedItems.splice(index, 1);
    this.shoppingCartMenuItemText = 'shopping cart (' + this.cartNumberOfItems + ')';
  }

  updateProductCount(newQuantity: number): void {
    this.cartNumberOfItems += newQuantity;
    this.shoppingCartMenuItemText = 'shopping cart (' + this.cartNumberOfItems + ')';
  }

}



