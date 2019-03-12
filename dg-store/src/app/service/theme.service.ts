import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    public changeTheme: boolean = false;
    public themeCurrentClass: string = localStorage.getItem('theme');
}
