import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './router-transitions';
import { DataService } from './data.service';
import { LocalizationService } from './localization.service';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit {

  showMenu = false;

  constructor(private dataService: DataService, private localization: LocalizationService, private cartService: CartService) { }

  ngOnInit() { }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }


}



