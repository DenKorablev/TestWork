import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTreeModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input'

import { AppComponent } from './app.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ItemService } from './item.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductsService } from './service/addProducts.service';
import { ResizeDirective } from './directive/resize.directive';
import { AppRoutingModule } from './route/app-routing.module';
import { BtnDirective } from './directive/btn.directive';
import { PaginationDirective } from './directive/pagination.directive';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent,
    EditItemComponent,
    SidebarComponent,
    ResizeDirective,
    BtnDirective,
    PaginationDirective,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
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
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatInputModule
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
