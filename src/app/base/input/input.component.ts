import { Component, Input,  Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'zds-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})

export class InputComponent {
  @Input() customPlaceholder: string;
  @Input() customValue: string;
  @Output() matField = new EventEmitter();

  changeData() {
    this.matField.emit(this.customValue);
  }
}
