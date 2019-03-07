import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ItemService } from '../../../item.service';
import { Item } from '../../../models/item.model';
import { AddProductsService } from 'src/app/service/addProducts.service';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'zds-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

  form: FormGroup;
  items: Item[] = [];
  selectedFile: File = null;
  @Input() item: Item;
  @Input() isAddedProduct: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onItemAdd = new EventEmitter<Item>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onItemEdit = new EventEmitter<Item>();
  @Output() formValue = new EventEmitter<any>();

  constructor(
    private itemService: ItemService,
    public addProductService: AddProductsService,
    public themeService: ThemeService
    ) { }

  ngOnInit() {
    this.item = {
      name: '',
      price: 0,
      count: 0,
      photo: '',
      category: []
    };

    this.isAddedProduct = true;
    this.form = new FormGroup({
      'photo': new FormControl(null),
      'name': new FormControl(null, [Validators.required, Validators.pattern(/([^0-9]{1,1})/)]),
      'price': new FormControl(null, [Validators.required, Validators.min(0)]),
      'count': new FormControl(null, [Validators.required, Validators.min(0)])
    });
    this.formValue.emit(this.form);
  }

  onFileSelected(event): void {
    this.selectedFile = <File>event.target.files;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.addProductService.photoUrl = event.target.result;
    };
    reader.readAsDataURL(event.target.files.item(0));
    this.uploadFile();
  }

  uploadFile(): void {
    const formData: any = new FormData();
    formData.append('uploads', this.selectedFile[0], this.selectedFile[0].name);
    this.addProductService.photoUrl = 'assets//images//' + this.selectedFile[0].name;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  isNotImage(): string {
    let itemImage = this.addProductService.photoUrl;
    if ( itemImage === '') {
      itemImage = '/assets/images/not-img.jpg';
    }
    return itemImage;
  }

  onSubmit() {
    if (this.isAddedProduct) {
    let {name, price, photo, count} = this.form.value;
    photo = this.addProductService.photoUrl;
    const item = new Item(name, price, count, photo);
    item.category.push(this.addProductService.selectedCategory);
    this.itemService.createNewItem(item)
      .subscribe((item: Item) => {
        this.onItemAdd.emit(item);
        this.item = {
          name: ' ',
          price: 0,
          count: 0,
          photo: '',
          category: []
        }
        this.addProductService.photoUrl = '/assets/images/not-img.jpg';
      });
    } else {
    let { name, price, count, photo } = this.form.value;
    photo = this.addProductService.photoUrl;
    const item = new Item(name, price, count, photo, this.item.category, this.item.id);
    this.itemService.updateItem(item)
      .subscribe((item: Item) => {
        this.onItemEdit.emit(item);
      });
    }
  }

  clearForm(): void {
    this.form.reset();
    this.addProductService.photoUrl = '/assets/images/not-img.jpg';
  }
}
