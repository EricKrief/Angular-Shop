import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModule,
    LoginModule,
    CoreModule,
    LayoutModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
