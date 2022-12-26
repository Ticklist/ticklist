import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('authForm', { static: false }) signUpForm!: NgForm;
  isLoginMode:boolean = true; // false = signUpTrue

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.form.value)
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
