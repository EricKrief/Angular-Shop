import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() pageChanged = new EventEmitter<string>();
  @Input() shoppingCartMenuItem: string;
  menuItems: string[];
  socialMediaUrls: string[];
  myProfiles: string[];


  constructor(private cartService: CartService, private dataService: DataService) { }
  ngOnInit() {
    this.menuItems = this.dataService.getMenuItems();
    this.socialMediaUrls = this.dataService.getSocialMediaUrls();
    this.myProfiles = this.dataService.getProfileUrls();
  }

  onPageChanged(requestedPage: string) {
    if (requestedPage.substring(0, 13) === "shopping cart") {
      this.pageChanged.emit("shopping cart");
      return;
    }
    this.pageChanged.emit(requestedPage);
  }

  getShoppingCart() {
    this.menuItems.pop();
    this.menuItems.push("shopping cart " + "(" + this.cartService.getProductsCount() + ")");
    console.log(this.menuItems[4]);
  }

}
