import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';
import { LocalizationService } from './services/localization.service';
import { PermissionService } from './services/permission.service';
import { AdminGuard } from './guards/admin.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CommonModule } from '@angular/common';
import { LogInterceptor } from './utils/log-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        CartService,
        DataService,
        LocalizationService,
        PermissionService,
        AdminGuard,
        CanDeactivateGuard,
        LoggedInGuard,
        { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
    ],

})
export class CoreModule {

    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error('Core module already created!');
        }
    }
}