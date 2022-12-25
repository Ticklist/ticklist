import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { AuthService } from './core/auth/auth.service';
import { LogsService } from './services/logs.service';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './user/new-user/new-user.component';
import { LoginComponent } from './user/login/login.component';
import {reducers }from './core/auth/index';

CommonModule
@NgModule({
  declarations: [
    AppComponent,
    LogCreateComponent,
    LogDetailsComponent,
    LogListComponent,
    NewUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    //StoreModule.forRoot(reducers)// we need to tell Angular what makes up our store and what reducers are involved.
  ],
  providers: [AuthService, LogsService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
