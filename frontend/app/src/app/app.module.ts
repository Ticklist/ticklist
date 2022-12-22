import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogCreateComponent } from './logs/log-create/log-create.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { AuthService } from './core/auth/auth.service';
import { LogsService } from './services/logs.service';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './user/new-user/new-user.component';
import { LoginComponent } from './user/login/login.component';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthGuardService, AuthService, LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
