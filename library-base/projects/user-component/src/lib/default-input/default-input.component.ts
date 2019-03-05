import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.less']
})
export class DefaultInputComponent {

  @Input() customPlaceholder: string;
  @Input() customValue: string;
  @Output() baseInputValue = new EventEmitter();

  changeData() {
    this.baseInputValue.emit(this.customValue);
  }
}
