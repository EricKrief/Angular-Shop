import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Contact Us!";

  constructor() { }
  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
