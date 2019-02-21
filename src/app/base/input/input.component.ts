import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/item.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'zds-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
