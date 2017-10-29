'use strict';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../Services/Authentication/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService) {
    // this.authService.checkAuthStatus();
  }

  onSubmit(formData) {
    if (formData.valid) {
      const loginData = formData.value;
      console.log(loginData);
      this.authService
        .loginWithEmail(loginData.email, loginData.password);
    }
  }
  ngOnInit() { }
}
