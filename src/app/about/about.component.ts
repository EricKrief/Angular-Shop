import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "We are a completely vegeterian shop. Here you can buy fresh fruits and vegetables!";

  constructor() { }
  ngOnInit() { }

}
