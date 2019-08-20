import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  @Output() goBack = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  backClicked() {
    this.goBack.emit();
  }

}
