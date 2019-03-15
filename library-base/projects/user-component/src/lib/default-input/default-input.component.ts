import { Component, Input } from '@angular/core';
import { StoreService } from '../mobx/store';
import { action, computed } from 'mobx-angular';

@Component({
  selector: 'lib-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.less']
})
export class DefaultInputComponent {

  @Input() customPlaceholder: string;
  @Input() customValue: string = this.storeService.customValue;

  constructor(
    private storeService: StoreService
  ) { }
  
  @computed get changeData() {
    return this.storeService.customValue;
  }

  @action changeText(text) {
    this.storeService.customValue = text;
  }
}
