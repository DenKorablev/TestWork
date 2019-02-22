import { Component, HostListener} from '@angular/core';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'zds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  constructor(private sharedService: SharedService) {}

  closePopup() {
    debugger;
    this.sharedService.openProfile = false  ;
  }
}
