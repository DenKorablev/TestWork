import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[zds-resizeWindow]'
})
export class ResizeDirective {
    @HostBinding('style.height') height: string;
    height = `${ window.innerHeight - 50 }px`;

    @HostListener('window:resize') onResize() {
        this.height = `${ window.innerHeight - 50 }px`;
    }
}