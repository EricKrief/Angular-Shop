import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input() product;
  @Output() goBack = new EventEmitter();

  backClicked() {
    this.goBack.emit();
  }
  
}
