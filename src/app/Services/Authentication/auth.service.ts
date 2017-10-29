'use strict';

import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(public angularFireAuth: AngularFireAuth, private angularFireAuthModule: AngularFireAuthModule) { }
  // checkAuthStatus() {
  //   if (this.angularFireAuth.authState) {
  //     console.log('logged in');
  //   }
  // }
  loginWithEmail(email: string, password: string) {
    console.log('email: ' + email);
    console.log('password: ' + password);
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        console.log(success);
        this.angularFireAuth.auth.currentUser.getIdToken(false)
          .then(function (idToken) {
            console.log('Current user\'s id token: ' + idToken);
          })
          .catch(function (error) {
            console.log(error.toString());
          });
    })
      .catch((err) => {
        console.log(err);
      });
  }
  // logout() {
  //   return this.af.auth.logout();
  // }
}
