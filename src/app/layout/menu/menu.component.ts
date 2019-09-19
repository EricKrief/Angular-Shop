import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { PermissionService } from '../../core/services/permission.service';
import { LocalizationService } from '../../core/services/localization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onLogOut = new EventEmitter();
  loggedIn: boolean;
  socialMediaUrls: string[];
  myProfiles: string[];
  languages: string[];
  currentLanguage: string = 'english';
  username: string;


  constructor(private dataService: DataService,
    private permissionService: PermissionService,
    private localizationService: LocalizationService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.permissionService.loggedInUsername;
    this.currentLanguage = this.localizationService.currentLanguage;
    this.languages = this.localizationService.getLanguageTitles();
    this.socialMediaUrls = this.dataService.getSocialMediaUrls();
    this.myProfiles = this.dataService.getProfileUrls();
    this.loggedIn = this.permissionService.loggedInUsername !== undefined;
  }


  logout() {
    this.permissionService.loggedInUsername = undefined;
    this.onLogOut.emit();
    this.router.navigate(['/login']);
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.localizationService.currentLanguage = language;
  }

}
