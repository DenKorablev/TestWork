import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTreeModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ItemService } from './item.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductsService } from './service/addProducts.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent,
    EditItemComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    NgxPaginationModule
  ],
  providers: [
    ItemService,
    AddProductsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
