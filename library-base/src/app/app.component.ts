import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'LibraryBase';

  constructor(
    public themeService: ThemeService
  ) {}

  changeTheme(theme) {
    this.themeService.themeCurrent = theme;
  }
}
