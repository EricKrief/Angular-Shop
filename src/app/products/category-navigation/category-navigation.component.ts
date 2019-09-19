import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductDisplayOptions } from 'src/app/core/models/product-display-options';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.css']
})
export class CategoryNavigationComponent implements OnInit {

  @Output() changeProductDisplay = new EventEmitter<string>();
  productDisplayOptions: ProductDisplayOptions[];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.productDisplayOptions = this.dataService.getProductDisplayOptions();
  }

  changeDisplay(clicked: ProductDisplayOptions) {
    for (let i = 0; i < this.productDisplayOptions.length; i++) {
      this.productDisplayOptions[i].selected = false;
    }
    clicked.selected = true;
    this.changeProductDisplay.emit(clicked.title);
  }

}
