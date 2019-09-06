import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { DataService } from '../data.service';

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
