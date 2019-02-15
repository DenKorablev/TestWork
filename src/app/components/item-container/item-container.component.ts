import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { Item } from '../../models/item.model';
import { ItemService } from '../../item.service';
import { AddProductsService } from 'src/app/service/addProducts.service';

@Component({
  selector: 'zds-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.less']
})
export class ItemContainerComponent {

  formContent: boolean;
  @Input() items: Item[] = [];
  @Output() isAdd = new EventEmitter<any>();
  @Output() editItem = new EventEmitter<any>();
  @Output() onPhotoUrl = new EventEmitter<any>();
  searchProduct = '';
  
  constructor(
    private itemService: ItemService,
    private addProductsService: AddProductsService) { }

  addProduct() {
    this.formContent = this.addProductsService.addProd();
    this.isAdd.emit(this.formContent);
  }

  editProduct(item: Item) {
    this.formContent = this.addProductsService.editProd();
    this.isAdd.emit(this.formContent);
    this.editItem.emit(item);
    this.onPhotoUrl.emit(item.photo);
  } 

  deleteItem(item: Item) {
    this.itemService.removeItem(item)
    .subscribe(() => {
      let product = this.items.find(p => p.id === item.id);
      const index = this.items.indexOf(product);
      if (index > -1) {
        this.items.splice(index, 1);
        product.name = '';
        product.price = 0;
        if (product.photo === this.addProductsService.photoUrl) {
          this.addProductsService.photoUrl = '';
        }
        product.count = 0;
      }
    });
  }
}

