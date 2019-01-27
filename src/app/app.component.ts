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
  public isAddedProduct: boolean;
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

  isAddedProducts(event: boolean) {
    console.log(event);
    this.isAddedProduct = event;
  }

  editProduct(eItem: Item) {
    this.editItem = eItem;
    console.log(this.editItem);
  }
}
