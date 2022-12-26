import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from ".";
import { IAuthState } from "./auth.reducer";

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    loggedIn:boolean = true;
    user!: Observable<IAuthState>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.user = this.store.select('auth')
    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}