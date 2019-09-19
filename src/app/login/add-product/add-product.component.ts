import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../core/guards/can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, CanComponentDeactivate {

  formFilled = false;
  addProductForm: FormGroup;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'description': new FormControl(null),
      'fact': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let values = this.addProductForm.value;
    this.dataService.createProduct(values.title, values.category, values.price, values.image, values.description, values.fact);
    this.formFilled = true;
    this.router.navigate(['/products']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.addProductForm.dirty && !this.formFilled) {
      return confirm('If you leave this page the information you have entered will be lost. \nAre you sure you want to leave?');
    }
    else {
      return true;
    }

  }

}
