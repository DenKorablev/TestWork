import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[zds-resizeWindow]'
})
export class ResizeDirective {
    @HostBinding('style.height') height: string
    = `${ window.innerHeight - 93 }px`;

    @HostListener('window:resize') onResize() {
        this.height = `${ window.innerHeight - 93 }px`;
    }
}