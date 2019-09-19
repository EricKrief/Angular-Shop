import { Injectable } from '@angular/core';
import { User } from 'src/model/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    loggedInUsername: string;
    users: User[];
    private _usersObs = new Subject();
    public readonly usersObs = this._usersObs.asObservable();

    constructor(private http: HttpClient) {
        this.http.get('assets/users.json').toPromise().then((json: any) => {
            this.users = json.users;
            this._usersObs.next(this.users);
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

    getUsersObs() {
        return this.usersObs;
    }

}