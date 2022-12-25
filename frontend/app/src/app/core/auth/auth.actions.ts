import { Action } from "@ngrx/store";
import { User } from "src/app/shared/models/user";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';



export class Login implements Action {
    public readonly type = LOGIN;
    constructor(public payload: User){} // new User needs to be created before calling action
}

export class Logout implements Action {
    public readonly type = LOGOUT;
}

export type AllActions = Login | Logout;
