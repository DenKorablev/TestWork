import { Component } from '@angular/core';
import { StoreService } from '../../projects/user-component/src/lib/mobx/store';
import { action } from 'mobx-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'LibraryBase';
  public textField: string = '';

  constructor(
    private storeService: StoreService
  ) {}

  changeTheme(theme) {
    this.storeService.themeCurrent = theme;
  }

  @action theme(className): string {
    return this.storeService.themeCurrent + '_' + className;
  }

  changeText(text) {
    this.textField = text;
  }
}
