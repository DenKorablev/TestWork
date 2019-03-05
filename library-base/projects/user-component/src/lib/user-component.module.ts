import { NgModule } from '@angular/core';
import { UserComponentComponent } from './user-component.component';
import { DefaultInputComponent } from './default-input/default-input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
  ],
  exports: [
    UserComponentComponent,
    DefaultInputComponent
  ]
})
export class UserComponentModule { }
