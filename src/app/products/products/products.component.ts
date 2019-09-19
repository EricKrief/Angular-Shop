import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  title = "Buy our products!";
  categorySelected: string;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.categorySelected = "All";
    this.products = this.dataService.getProducts();
  }

  changeProductDisplay(displayTitle: string) {
    this.categorySelected = displayTitle;
  }

}
