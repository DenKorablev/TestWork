import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Item } from './models/item.model';
import { ItemService } from './item.service';
import { AddProductsService } from './service/addProducts.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [  
    trigger('changeSizeSidebar', [  
      state('initial', style({  
        width: '50px',  
        minWidth: '50px'
      })),  
      state('final', style({  
        width: '380px',
        minWidth: '380px'
      })),  
      transition('initial=>final', animate('150ms')),  
      transition('final=>initial', animate('150ms'))  
    ]),  
  ]  
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  isAddedProduct: boolean;
  editItem: Item;
  public isSidebarOpen: boolean = false;
  public currentState = 'initial';
  constructor(
    private itemService: ItemService,
    private addProductService: AddProductsService
    ) { }

  ngOnInit() {
    this.getItemsCategory();
  }

  getItemsCategory() {
    const selectCategory = this.addProductService.selectedCategory;
    this.itemService.getItem()
    .subscribe((items: Item[]) => {
      let filterItem = items;
      if (selectCategory !== null) {
      filterItem = items.filter(
        p => selectCategory === null
        || p.category.indexOf(selectCategory) !== -1);
      }
      this.items = filterItem;
    });
  }

  newItemAdded(item: Item) {
    this.items.push(item);
  }

  itemWasEdited(item: Item) {
    const idx = this.items
      .findIndex(p => p.id === item.id);
    this.items[idx] = item;
  }

  isAddedProducts(event: boolean) {
    this.isAddedProduct = event;
  }

  editProduct(eItem: Item) {
    this.editItem = eItem;
  }

  newPhotoUrl(event: any) {
    this.addProductService.photoUrl = event;
  }

  changeCategoryItems(category: string) {
    this.addProductService.selectedCategory = category;
    this.getItemsCategory();
  }
    
  sidebarOpen() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
