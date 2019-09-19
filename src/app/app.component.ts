import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './core/utils/router-transitions';
import { DataService } from './core/services/data.service';
import { LocalizationService } from './core/services/localization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit {

  showMenu = false;

  constructor(private dataService: DataService, private localization: LocalizationService) { }

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



