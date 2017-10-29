'use strict';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';

import { AuthService } from './Services/Authentication/auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDzBxD9Lcy4tyDDHCPHJq4isIBmdlCQB7M',
  authDomain: 'darrenweb-server.firebaseapp.com',
  databaseURL: 'https://darrenweb-server.firebaseio.com',
  projectId: 'darrenweb-server',
  storageBucket: 'darrenweb-server.appspot.com',
  messagingSenderId: '840431955953'
};

@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    SignInComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent,
    ViewProfileComponent,
    SignInComponent,
    EditProfileComponent
  ]
})
export class AppModule { }
