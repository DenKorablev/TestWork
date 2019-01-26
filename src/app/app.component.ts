import { Component } from '@angular/core';
import { Item } from './models/item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  items: Item[] = [];
  title = 'test-store';

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItem()
      .subscribe((items: Item[]) => {
        this.items = items;
      });
  }

  newItemAdded(item: Item) {
    debugger;
    this.items.push(item);
  }
}
