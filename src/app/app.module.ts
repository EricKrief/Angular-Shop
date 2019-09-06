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
import { ConfirmationDirective } from './confirmation.directive';
import { Routes, RouterModule } from '@angular/router';
import { CartProductDetailsComponent } from './cart-product-details/cart-product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggedInGuard } from './logged-in.guard';
import { AdminGuard } from './admin.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: '1' } },
  { path: 'about', component: AboutComponent, data: { animation: '2' }  },
  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard], canDeactivate: [CanDeactivateGuard], data: { animation: 'one' }  },
  { path: 'contact', component: ContactComponent, data: { animation: '3' } },
  { path: 'edit-product', component: EditProductComponent, canActivate: [AdminGuard], data: { animation: '4' }  },
  { path: 'login', component: LoginComponent, data: { animation: '5' } },
  { path: 'product-details/:name', component: ProductDetailsComponent, data: { animation: '6' }  },
  { path: 'products', component: ProductsComponent, data: { animation: '7' }  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent,
    children: [{ path: ':name', component: CartProductDetailsComponent }],
    canActivate: [LoggedInGuard], data: { animation: '8' } 
  },
  { path: 'edit-product/:name', component: EditProductComponent, data: { animation: '9' }  },
  { path: '**', component: PageNotFoundComponent, data: { animation: '10' }  }
];

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
    LocalizePipe,
    ConfirmationDirective,
    CartProductDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
