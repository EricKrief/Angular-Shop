import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { NotifierComponent } from './notifier/notifier.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailsComponent,
        ProductListComponent,
        CategoryNavigationComponent,
        NotifierComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
})
export class ProductsModule { }