import { Injectable } from '@angular/core';
import { User } from 'src/model/user';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    loggedInUsername: string;
    users: User[] = [{ username: 'user', password: 'user' }, { username: 'admin', password: 'admin' }];


    validateUser(username: string, password: string): boolean {
        let validated = false;
        this.users.forEach(current => {
            if (username === current.username && password === current.password) {
                this.loggedInUsername = username;
                validated = true;
            }
        });
        return validated;
    }

}