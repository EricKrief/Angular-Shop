import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-cart-product-details',
  templateUrl: './cart-product-details.component.html',
  styleUrls: ['./cart-product-details.component.css']
})
export class CartProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.product = this.dataService.getProductByName(this.route.snapshot.params['name']);
  }

  backClicked() {
    this.router.navigate(['/shopping-cart']);
  }




}
