import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataService } from '../data.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() pageChanged = new EventEmitter<string>();
  @Output() logOut = new EventEmitter();
  @Input() shoppingCartMenuItem: string;
  @Input() loggedIn: boolean;
  selectedMenuItem: string;
  logInOut: string;
  menuItems: string[];
  socialMediaUrls: string[];
  myProfiles: string[];


  constructor(private dataService: DataService, private permissionService: PermissionService) { }
  ngOnInit() {
    this.menuItems = this.dataService.getMenuItems();
    this.socialMediaUrls = this.dataService.getSocialMediaUrls();
    this.myProfiles = this.dataService.getProfileUrls();
    if (this.loggedIn) {
      this.logInOut = 'logout';
    }
    else {
      this.logInOut = 'login';
    }
    this.selectedMenuItem = this.dataService.getLastClicked();
  }

  onPageChanged(requestedPage: string) {
    if (requestedPage === 'logout') {
      this.selectedMenuItem = 'home';
      if (this.permissionService.loggedInUsername === 'admin') {
        this.dataService.removeProductMenuItem();
      }
      this.dataService.lastClickedMenuItem('home');
      this.loggedIn = false;
      this.logInOut = 'login';
      this.pageChanged.emit(requestedPage);
      this.permissionService.loggedInUsername = undefined;
      return;
    }
    if (requestedPage.substring(0, 13) === "shopping cart") {
      this.pageChanged.emit("shopping cart");
      this.selectedMenuItem = 'shopping cart';
      this.dataService.lastClickedMenuItem('shopping cart');
      return;
    }
    this.selectedMenuItem = requestedPage;
    this.dataService.lastClickedMenuItem(requestedPage);
    this.pageChanged.emit(requestedPage);
  }

}
