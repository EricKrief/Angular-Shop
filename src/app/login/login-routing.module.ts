import { NgModule } from '@angular/core';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';

const loginRoutes: Routes = [
    { path: 'edit-product', component: EditProductComponent, canActivate: [AdminGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'edit-product/:name', component: EditProductComponent },
    { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard], canDeactivate: [CanDeactivateGuard] },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }