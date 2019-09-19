import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PermissionService } from '../services/permission.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    constructor(private permissionService: PermissionService, private router: Router) { }

    canActivate() {  
        if (this.permissionService.loggedInUsername !== undefined) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }

}