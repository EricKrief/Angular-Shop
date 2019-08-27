import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;
  @Output() updated = new EventEmitter();
  editProductForm: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.editProductForm = new FormGroup({
      'title': new FormControl(this.product.title, Validators.required),
      'category': new FormControl(this.product.categoryName, Validators.required),
      'price': new FormControl(this.product.price.substring(0, this.product.price.length - 1), [Validators.required, Validators.min(0.1)]),
      'image': new FormControl(this.product.imgUrl, Validators.required),
      'description': new FormControl(this.product.description)
    });
  }

  onSubmit() {
    let oldTitle: string = null;
    if (this.editProductForm.value.title !== null) {
      oldTitle = this.product.title;
      this.product.title = this.editProductForm.value.title;
    }
    if (this.editProductForm.value.category !== null) {
      this.product.categoryName = this.editProductForm.value.category;
      this.product.categoryId = this.dataService.getCategoryByName(this.product.categoryName).id;
    }
    if (this.editProductForm.value.price !== null) {
      this.product.price = this.editProductForm.value.price + '$';
    }
    if (this.editProductForm.value.image !== null) {
      this.product.imgUrl = this.editProductForm.value.image;
    }
    if (this.editProductForm.value.description !== null) {
      this.product.description = this.editProductForm.value.description;
    }
    this.dataService.updateProduct(this.product, oldTitle);
    this.updated.emit();
  }

}
