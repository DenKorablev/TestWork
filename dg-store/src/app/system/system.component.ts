import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { AddProductsService } from '../service/addProducts.service';
import { SharedService } from '../service/shared.service';
import { ProfileService } from '../service/profile.service';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'zds-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.less'],
})

export class SystemComponent implements OnInit {
  items: Item[] = [];
  isAddedProduct: boolean;
  editItem: Item;
  public isSidebarOpen: boolean = false;
  public currentState = 'initial';
  isLoaded: boolean;
  spVlisble: boolean = false;

  constructor(
    private itemService: ItemService,
    private addProductService: AddProductsService,
    public sharedService: SharedService,
    private profileService: ProfileService,
    public themeService: ThemeService
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
    this.isSidebarOpen = !this.isSidebarOpen;
    this.spVlisble = !this.spVlisble;
  }

  openProfileModal(): void {
    this.sharedService.openProfile = !this.sharedService.openProfile;
  }
  
  closePopup(): void {
    this.sharedService.openProfile = false;
  }

  onAddDataUser(): string {
    return this.profileService.user_name != "" || 
      this.profileService.user_name != "" 
      ? 'right-content_user-name' 
      : '';
  }

  changeThemeColor(color) {
    this.themeService.themeCurrentClass = color;
    localStorage.setItem('theme', this.themeService.themeCurrentClass);
  }
}
