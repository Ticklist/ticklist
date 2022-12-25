import * as  AuthActions from "./auth.actions";
import { State, ActionReducerMap } from "@ngrx/store";
import { User } from "src/app/shared/models/user";

export interface IAuthState {
    user: User | null;
}

const initialState: IAuthState = {
    user: null
};

export function authReducer(
    state: IAuthState = initialState,
    action: AuthActions.AllActions): IAuthState {

    switch (action.type) {
        case AuthActions.LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state; // to return default when angular starts up
    }
}

//export const authReducer: ActionReducerMap<IAuthState , any> = {};