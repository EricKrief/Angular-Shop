import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        ContentProjectionComponent,
        HeaderComponent,
        HomeComponent,
        MenuComponent,
        MenuItemComponent,
        NavBarComponent,
        PageNotFoundComponent
    ],

    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule,
    ],
    exports: [
        NavBarComponent,
        MenuComponent,
        HeaderComponent,
    ]

})
export class LayoutModule { }