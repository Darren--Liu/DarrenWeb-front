'use strict';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EditProfileComponent} from './editProfile.component';

@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EditProfileComponent]
})
export class EditProfileModule { }
