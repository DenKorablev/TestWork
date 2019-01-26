import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../item.service';

@Component({
  selector: 'zds-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.less']
})
export class ItemContainerComponent {

  @Input() items: Item[] = [];


  constructor(
    private itemService: ItemService) 
    { } 

  deleteItem(item: Item) {
    this.itemService.removeItem(item)
    .subscribe(() => {
      let product = this.items.find(p => p.id === item.id);
      const index = this.items.indexOf(product);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    });
  }
}

