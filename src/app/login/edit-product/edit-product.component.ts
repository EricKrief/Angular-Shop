import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  editProductForm: FormGroup;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.product = this.dataService.getProductByName(this.route.snapshot.params['name']);
    this.editProductForm = new FormGroup({
      'title': new FormControl(this.product.title, Validators.required),
      'category': new FormControl(this.product.categoryName, Validators.required),
      'price': new FormControl(this.product.price.substring(0, this.product.price.length - 1), [Validators.required, Validators.min(0.1)]),
      'image': new FormControl(this.product.imgUrl, Validators.required),
      'description': new FormControl(this.product.description),
      'fact': new FormControl(this.product.fact, Validators.required)
    });
  }

  onSubmit() {
    let oldTitle = this.product.title;
    this.product.title = this.editProductForm.value.title;
    this.product.categoryName = this.editProductForm.value.category;
    this.product.categoryId = this.dataService.getCategoryByName(this.product.categoryName).id;
    this.product.price = this.editProductForm.value.price + '$';
    this.product.imgUrl = this.editProductForm.value.image;
    this.product.description = this.editProductForm.value.description;
    this.product.fact = this.editProductForm.value.fact;
    this.dataService.updateProduct(this.product, oldTitle);
    this.router.navigate(['/products']);
  }

}
