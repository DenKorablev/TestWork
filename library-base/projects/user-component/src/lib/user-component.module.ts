import { NgModule } from '@angular/core';
import { UserComponentComponent } from './user-component.component';
import { DefaultInputComponent } from './default-input/default-input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreService } from './mobx/store';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    UserComponentComponent, 
    DefaultInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MobxAngularModule
  ],
  exports: [
    UserComponentComponent,
    DefaultInputComponent,
    MobxAngularModule
  ],
  providers: [
    StoreService
  ]
})
export class UserComponentModule { }
