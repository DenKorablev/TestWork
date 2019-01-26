import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onItemAdd = new EventEmitter<Item>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'photo': new FormControl(null),
      'name': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required, Validators.min(0)]),
      'count': new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const {name, price, photo, count} = this.form.value;
    const item = new Item(name, price, count, photo);
    this.itemService.createNewItem(item)
      .subscribe((item: Item) => {
        debugger;
        this.onItemAdd.emit(item);
        this.form.reset();
      });
  }
  
  clearForm() {
    this.form.reset();
  }
}
