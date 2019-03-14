import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponentModule } from 'projects/user-component/src/public_api';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobxAngularModule } from 'mobx-angular';
import { StoreService } from './mobx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserComponentModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MobxAngularModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
