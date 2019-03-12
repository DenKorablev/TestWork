import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    public changeTheme: boolean = false;
    public themeCurrentClass: string = "ligth";

    onChangeTheme(): boolean {
        this.changeTheme = !this.changeTheme;
        return this.changeTheme;
    }
}
