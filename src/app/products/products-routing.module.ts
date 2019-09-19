import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';


const productsRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'product-details/:name', component: ProductDetailsComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class ProductsRoutingModule { }