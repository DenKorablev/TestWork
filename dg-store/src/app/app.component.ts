import { Component } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  constructor(
    public themeService: ThemeService
    ) { }

    onChangeTheme(theme) {
      this.themeService.changeTheme = theme;
    }
}
