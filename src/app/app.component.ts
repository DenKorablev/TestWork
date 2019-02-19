import { Component, OnInit} from '@angular/core';
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
  isLoaded: boolean;

  constructor(
    private itemService: ItemService,
    private addProductService: AddProductsService
    ) { }

  ngOnInit() {
    this.getItemsCategory();
  }


  getItemsCategory(): void {
    const selectCategory = this.addProductService.selectedCategory;
    this.isLoaded = false;
    this.itemService.getItem()
    .subscribe((items: Item[]) => {
      let filterItem = items;
      if (selectCategory !== null) {
      filterItem = items.filter(
        p => selectCategory === null
        || p.category.indexOf(selectCategory) !== -1);
      }
      this.items = filterItem;
      this.isLoaded = true;
    });
  }

  newItemAdded(item: Item): void {
    this.items.push(item);
  }

  itemWasEdited(item: Item): void {
    const idx = this.items
      .findIndex(p => p.id === item.id);
    this.items[idx] = item;
  }

  isAddedProducts(event: boolean): void {
    this.isAddedProduct = event;
  }

  editProduct(eItem: Item): void {
    this.editItem = eItem;
  }

  newPhotoUrl(event: any): void {
    this.addProductService.photoUrl = event;
  }

  changeCategoryItems(category: string): void {
    this.addProductService.selectedCategory = category;
    this.getItemsCategory();
  }  

  sidebarOpen(): void {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
