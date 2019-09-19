import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit, OnDestroy {

  @Input() itemTitle: string;
  @Input() language: string;
  @Input() shoppingCart: boolean;
  @Output() itemClick = new EventEmitter<string>();
  numberOfItems: number;
  subsciption: Subscription;


  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.subsciption = this.cartService.numberOfItems.subscribe(
      data => { this.numberOfItems = data }
    )
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  itemClicked(item: string) {
    this.itemClick.emit(item);
  }


}
