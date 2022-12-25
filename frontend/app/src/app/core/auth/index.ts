import * as FromAuthReducer from "./auth.reducer";
import { ActionReducerMap } from '@ngrx/store';



export const rootReducer = {};

export interface AppState {
    auth: FromAuthReducer.IAuthState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    auth: FromAuthReducer.authReducer
};