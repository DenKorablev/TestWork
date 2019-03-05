import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public openProfile: boolean = false;
    
  closePopup() {
    this.openProfile = false;
  }
}
