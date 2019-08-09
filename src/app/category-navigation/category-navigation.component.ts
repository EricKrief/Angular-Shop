import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.css']
})
export class CategoryNavigationComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Output() changeProductDisplay = new EventEmitter<string>();
  productDisplayOptions = [{ title: "All", selected: true }, { title: "Fruit", selected: false }, { title: "Vegetable", selected: false }];

  changeDisplay(clicked) {
    for (let i = 0; i < this.productDisplayOptions.length; i++) {
      this.productDisplayOptions[i].selected = false;
    }
    clicked.selected = true;
    this.changeProductDisplay.emit(clicked.title);
  }

}
