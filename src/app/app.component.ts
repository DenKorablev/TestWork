import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './models/item.model';
import { ItemService } from './item.service';
import { AddProductsService } from './service/addProducts.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  isAddedProduct: boolean;
  editItem: Item;

  constructor(
    private itemService: ItemService,
    private addProductService: AddProductsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getItemsCategory();
    this.router.navigate(['/store']);
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
}
