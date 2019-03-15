import { Component } from '@angular/core';
import { StoreService } from '../../projects/user-component/src/lib/mobx/store';
import { action, computed } from 'mobx-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'LibraryBase';

  constructor(
    private storeService: StoreService
  ) {}

  changeTheme(theme) {
    this.storeService.themeCurrent = theme;
  }

  @action theme(className): string {
    return this.storeService.themeCurrent + '_' + className;
  }

  @computed get textField() {
    return this.storeService.customValue;
  }
}
