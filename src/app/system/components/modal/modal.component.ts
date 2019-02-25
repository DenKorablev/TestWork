import { Component } from '@angular/core';
import { SharedService } from '../../../service/shared.service';
import { ProfileService } from '../../../service/profile.service';

@Component({
  selector: 'zds-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {
  public user_name: string = this.profileService.user_name;
  public user_surname: string = this.profileService.user_surname;

  constructor(
    public sharedService: SharedService,
    public profileService: ProfileService
    ) { }

  closeProfileModal(): void {
    this.sharedService.openProfile = !this.sharedService.openProfile;
  }

  returnPreviousValue(): void {
    this.user_name = this.profileService.user_name;
    this.user_surname= this.profileService.user_surname;
  }

  onNameChanged(name: string): void {
    this.user_name = name;
  }

  onSurnameChanged(surname: string): void {
    this.user_surname = surname;
  }

  onChangedProfile(): void {
    this.profileService.user_name = this.user_name ;
    this.profileService.user_surname = this.user_surname;
    this.closeProfileModal();
  }
}
