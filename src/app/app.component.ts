import { Component, Input } from '@angular/core';
import { Item } from './models/item.model';
import { ItemService } from './item.service';
import { AddProductsService } from './service/addProducts.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  items: Item[] = [];
  title = 'test-store';
  isAddedProduct: boolean;
  editItem: Item;

  constructor(
    private itemService: ItemService
    ) { }

  ngOnInit() {
    this.itemService.getItem()
      .subscribe((items: Item[]) => {
        this.items = items;
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
}
