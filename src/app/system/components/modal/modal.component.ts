import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'zds-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  constructor(public sharedService: SharedService) { }

  closeProfileModal() {
    this.sharedService.openProfile = !this.sharedService.openProfile;
  }
}
