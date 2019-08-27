import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() itemTitle: string;
  @Input() selected: boolean;
  @Input() language: string;
  @Input() shoppingCart: boolean;
  @Output() itemClick = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  itemClicked(item: string) {
    this.itemClick.emit(item);
  }

}
