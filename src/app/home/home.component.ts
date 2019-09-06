import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Welcome to the shop!';
  username: string;


  constructor(private permissionService: PermissionService) { }
  ngOnInit() {
    this.username = this.permissionService.loggedInUsername;
    if (this.username !== undefined) {
      this.title = `Welcome, ${this.username}!`;
    }
  }

}
