import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../../../models/item.model';
import { ItemService } from '../../../item.service';
import { AddProductsService } from 'src/app/service/addProducts.service';
import { ThemeService } from 'src/app/service/theme.service';

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
  searchProduct: string = '';
  
  constructor(
    private itemService: ItemService,
    private addProductsService: AddProductsService,
    public themeService: ThemeService
    ) { }

  addProduct(): void {
    this.formContent = this.addProductsService.addProd();
    this.isAdd.emit(this.formContent);
  }

  editProduct(item: Item): void {
    this.formContent = this.addProductsService.editProd();
    this.isAdd.emit(this.formContent);
    this.editItem.emit(item);
    this.onPhotoUrl.emit(item.photo);
  } 

  deleteItem(item: Item): void {
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


