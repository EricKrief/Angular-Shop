import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartProductDetailsComponent } from './cart-product-details/cart-product-details.component';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        CartProductDetailsComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule
    ]
})
export class CartModule { }