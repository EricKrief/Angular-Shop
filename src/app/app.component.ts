import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { DataService } from './data.service';
import { Product } from 'src/model/product';
import { Category } from 'src/model/category';
import { CartService } from './cart.service';
import { LocalizationService } from './localization.service';

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
        animate('1000ms ease-in', style({ opacity: '0' }))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {


  notifier = false;
  username: string;
  productName: string;
  categories: Category[];
  products: Product[];
  displayPage = "home";
  product: Product;
  showCart = false;
  showMenu = false;
  cartNumberOfItems: number = 0;
  shoppingCartMenuItemText = 'shopping cart (0)';
  homeText = "Welcome to the shop!"
  addedItems: Product[] = [];
  currentLanguage: string = 'english';

  constructor(private dataService: DataService, private cartService: CartService, private localizationService: LocalizationService) { }

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
    if (requestedPage === 'logout') {
      this.homeText = 'Welcome to the shop!';
      this.showCart = false;
      this.showMenu = false
      this.displayPage = 'home';
      return;
    }
    this.displayPage = requestedPage;
  }

  addItem(product: Product): void {
    if (this.productAlreadyInCart(product)) {
      this.showNotifier(product.title);
      return;
    }

    this.cartNumberOfItems++;
    this.addedItems.push(product);
    this.shoppingCartMenuItemText = this.getShoppingCartText();
  }

  showNotifier(productName: string) {
    this.productName = productName;
    this.notifier = true;
    setTimeout(() => { this.notifier = false; }, 4000);
  }

  productAlreadyInCart(product: Product): boolean {
    for (let i = 0; i < this.addedItems.length; i++) {
      if (product.title === this.addedItems[i].title) {
        return true;
      }
    }
    return false;
  }

  removeProduct(product: Product): void {
    let index: number;
    for (let i = 0; i < this.addedItems.length; i++) {
      if (product.title === this.addedItems[i].title) {
        index = i;
      }
    }
    this.cartNumberOfItems -= product.quantity;
    this.addedItems.splice(index, 1);
    this.shoppingCartMenuItemText = this.getShoppingCartText();
  }

  updateProductCount(newQuantity: number): void {
    this.cartNumberOfItems += newQuantity;
    this.shoppingCartMenuItemText = this.getShoppingCartText();
  }


  login(username: string) {
    let userProducts: Product[] = this.cartService.getProducts(username);
    this.addedItems = [...this.cartService.getProducts(username)];
    this.cartNumberOfItems = 0;
    for (let i = 0; i < userProducts.length; i++) {
      this.cartNumberOfItems += userProducts[i].quantity;;
    }
    this.shoppingCartMenuItemText = this.getShoppingCartText();
    this.dataService.lastClickedMenuItem('home');
    this.displayPage = 'home';
    this.homeText = 'Welcome ' + username + '!';
    this.username = username;
    this.showCart = true;
    this.showMenu = false;
    if (username === 'admin') {
      this.dataService.addProductMenuItem();
    }
  }

  editProduct(product: Product) {
    this.product = product;
    this.displayPage = 'edit product';
  }

  updated() {
    this.displayPage = 'products';
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.shoppingCartMenuItemText = this.getShoppingCartText();
  }

  getShoppingCartText() {
    if (this.currentLanguage === 'עברית') {
      return ' (' + this.localizationService.getTranslatedWord('shopping cart', this.currentLanguage) + '(' + this.cartNumberOfItems;
    }
    else {
      return this.localizationService.getTranslatedWord('shopping cart', this.currentLanguage) + '(' + this.cartNumberOfItems + ')';
    }
  }

}



