import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierComponent } from './notifier/notifier.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LocalizePipe } from './localize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    MenuItemComponent,
    ProductComponent,
    ProductListComponent,
    CategoryNavigationComponent,
    ProductDetailsComponent,
    ContentProjectionComponent,
    ShoppingCartComponent,
    NotifierComponent,
    LoginComponent,
    AddProductComponent,
    EditProductComponent,
    LocalizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
