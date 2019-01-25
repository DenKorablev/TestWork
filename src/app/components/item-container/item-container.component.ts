import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'zds-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.less']
})
export class ItemContainerComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private itemService: ItemService
    ) { }

  ngOnInit() {
    this.itemService.getItem()
      .subscribe((items: Item[]) => {
        this.items = items;
      });
  }

  deleteItem(item: Item) {
    this.itemService.removeItem(item)
      .subscribe(()=> {
      });
  }
}
