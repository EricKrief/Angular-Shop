import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Output() pageChanged = new EventEmitter<string>();
  menuItems = ["home", "about", "products", "contact"];
  socialMediaUrls = [
    "https://qvcc.edu/wp-content/uploads/2019/06/FB.png",
    "http://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png",
    "https://s18955.pcdn.co/wp-content/uploads/2019/06/gmail-copy.png"
  ];

  my_profiles = [
    "https://www.facebook.com/eric.krief.7",
    "https://github.com/EricKrief",
    "mailto:erickrief1@gmail.com"
  ];

  onPageChanged(event) {
    this.pageChanged.emit(event);
  }

}
