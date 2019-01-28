import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'zds-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

  form: FormGroup;
  items: Item[] = [];
  selectedFile: File = null;
  image: string;
  photoUrl = '';
  @Input() item: Item;
  @Input() isAddedProduct: boolean;
  @Output() onItemAdd = new EventEmitter<Item>();
  @Output() onItemEdit = new EventEmitter<Item>();

  constructor(
    private itemService: ItemService
    ) { }

  ngOnInit() {
    this.item = {
      name: '',
      price: 0,
      count: 0,
      photo: ''
    }
    this.isAddedProduct = true;
    this.form = new FormGroup({
      'photo': new FormControl(null),
      'name': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required, Validators.min(0)]),
      'count': new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.photoUrl = event.target.result;
    };
    reader.readAsDataURL(event.target.files.item(0));
    this.upload();
  }

  upload() {
    const formData: any = new FormData();
    const files: File = this.selectedFile;
    formData.append("uploads", files[0], files[0]['name']);
    this.image = 'assets//images//' + files[0].name;
    this.item.photo = this.image;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    if (this.isAddedProduct) {
    let {name, price, photo, count} = this.form.value;
    photo = this.image;
    const item = new Item(name, price, count, photo);
    this.itemService.createNewItem(item)
      .subscribe((item: Item) => {
        this.onItemAdd.emit(item);
        this.form.reset();
        this.photoUrl = '';
      });
    } else {
    let {name, price, photo, count, id} = this.form.value;
    photo = this.image;
    const item = new Item(name, price, count, photo, this.item.id);
    this.itemService.updateItem(item)
      .subscribe((item: Item) => {
        this.onItemEdit.emit(item);
      });
    }
  }

  clearForm() {
    this.form.reset();
  }
}
