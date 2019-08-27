import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() login = new EventEmitter<string>();
  incorrectLogin = false;

  constructor(private permission: PermissionService) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (this.permission.validateUser(form.value.username, form.value.password)) {
      this.login.emit(form.value.username);
      this.incorrectLogin = false;
    }
    else {
      this.incorrectLogin = true;
    }
  }
}
