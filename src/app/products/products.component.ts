import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input() products;
  @Output() showProductDetails = new EventEmitter<object>();
  title = "Buy our products!";
  categorySelected = "All";

  changeProductDisplay(displayTitle) {
    this.categorySelected = displayTitle;
  }

  productClicked(product) {
    this.showProductDetails.emit(product);
  }

}
