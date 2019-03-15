import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.less']
})
export class DefaultInputComponent {

  @Input() customPlaceholder: string;
  @Input() customValue: string;
  @Output() baseInputValue = new EventEmitter<string>();

  changeData(text: string) {
    this.baseInputValue.emit(text);
  }
}
