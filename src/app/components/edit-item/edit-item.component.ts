import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zds-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required, Validators.min(0)]),
      'description': new FormControl(null, [Validators.required])
    });

  }

  onSubmit() {
    console.log(this.form);
  }
}
