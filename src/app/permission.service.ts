import { Injectable } from '@angular/core';
import { User } from 'src/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    loggedInUsername: string;
    users: User[];

    constructor(private http: HttpClient) {
       this.http.get('assets/users.json').toPromise().then((json: any) => {
            this.users = json.users;
        });

    }

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