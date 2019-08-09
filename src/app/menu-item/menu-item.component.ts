import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input() itemTitle: string;
  @Output() itemClick = new EventEmitter<string>();

  itemClicked(item: string) {
    this.itemClick.emit(item);
  }

}
