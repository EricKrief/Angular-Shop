import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  @Output() goBack = new EventEmitter();

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.product = this.dataService.getProductByName(this.route.snapshot.params['name']);
  }

  backClicked() {
    this.router.navigate(['/products']);
  }

}
