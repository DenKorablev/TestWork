import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'zds-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit, DoCheck {

  form: FormGroup;
  items: Item[] = [];
  @Input() item: Item;
  selectedFile: File = null;
  photoUrl = '';
  @Output() onItemAdd = new EventEmitter<Item>();
  @Input() isAddedProduct: boolean;

  constructor(
    private itemService: ItemService,
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

  ngDoCheck() {
    if(this.item.photo != '') {
      this.photoUrl = this.item.photo;
    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.photoUrl = event.target.result;
    }
    reader.readAsDataURL(event.target.files.item(0));
  }

  isControlInvalid(controlName: string): boolean {
    debugger;
    let x = this.form.get('name').value;
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    if(this.isAddedProduct) {
    const {name, price, photo, count} = this.form.value;
    const item = new Item(name, price, count, photo);
    this.itemService.createNewItem(item)
      .subscribe((item: Item) => {
        this.onItemAdd.emit(item);
        this.form.reset();
        this.photoUrl = '';
      });
    }
  }
  
  clearForm() {
    this.form.reset();
  }
}
