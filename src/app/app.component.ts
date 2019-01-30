import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item.model';
import { ItemService } from './item.service';
import { AddProductsService } from './service/addProducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  title = 'test-store';
  isAddedProduct: boolean;
  editItem: Item;

  constructor(
    private itemService: ItemService,
    private addProductService: AddProductsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.itemService.getItem()
      .subscribe((items: Item[]) => {
        this.items = items;
      });
    this.router.navigate(['/store']);
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
}
