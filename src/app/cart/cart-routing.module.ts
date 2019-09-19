import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartProductDetailsComponent } from './cart-product-details/cart-product-details.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';

const cartRoutes: Routes = [
    {
        path: '', component: ShoppingCartComponent,
        children: [{ path: ':name', component: CartProductDetailsComponent }],
        canActivate: [LoggedInGuard]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(cartRoutes)
    ],
    exports: [
        RouterModule
    ]


})
export class CartRoutingModule { }