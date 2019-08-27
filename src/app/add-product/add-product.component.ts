import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() productAdded = new EventEmitter();
  addProductForm: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'description': new FormControl(null)
    });
  }

  onSubmit() {
    let values = this.addProductForm.value;
    this.dataService.createProduct(values.title, values.category, values.price, values.image, values.description);
    this.productAdded.emit();
  }

}
