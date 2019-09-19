import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product } from 'src/app/core/models/product';
import { PermissionService } from '../../core/services/permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() categorySelected: string;
  productName: string;
  notifier = false;
  loggedInUsername: string;

  constructor(private cartService: CartService, private permissionService: PermissionService, private router: Router) { }
  ngOnInit() {
    this.loggedInUsername = this.permissionService.loggedInUsername;
  }

  productClicked(product: Product) {
    this.router.navigate(['/product-details/' + product.title]);
  }

  showNotifier() {
    this.notifier = true;
    setTimeout(() => this.notifier = false, 4000);
  }

  addProduct(product: Product) {
    if (this.cartService.doesExist(product, this.loggedInUsername)) {
      this.productName = product.title;
      this.showNotifier();
    }
    this.cartService.addProduct(product, this.loggedInUsername);
  }

  editClicked(product: Product) {
    this.router.navigate(['edit-product/'+product.title]);
  }

}
