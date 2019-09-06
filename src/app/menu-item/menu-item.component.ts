import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() itemTitle: string;
  @Input() language: string;
  @Input() shoppingCart: boolean;
  @Output() itemClick = new EventEmitter<string>();
  numberOfItems: number;

  constructor(private cartService: CartService, private permissionService: PermissionService) { }
  ngOnInit() {
    this.numberOfItems = this.cartService.getProductsCount(this.permissionService.loggedInUsername);
  }

  itemClicked(item: string) {
    this.itemClick.emit(item);
  }

}
