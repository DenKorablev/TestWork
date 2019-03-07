import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    public changeTheme: boolean = false;

    onChangeTheme(): boolean {
        this.changeTheme = !this.changeTheme;
        return this.changeTheme;
    }
}
