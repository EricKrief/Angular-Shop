import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input() products;
  @Input() categorySelected;
  @Output() showProductDetails = new EventEmitter<object>();

  productClicked(product) {
    this.showProductDetails.emit(product);
  }

}
