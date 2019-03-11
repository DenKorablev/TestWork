import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[zds-resizeWindow]'
})

export class ResizeDirective {

    header = null;

    @HostBinding('style.height') height: string
    = `${ window.innerHeight - this.header }px`;

    @HostListener('window:resize') onResize() {
        this.height = `${ window.innerHeight - this.header }px`;
    }

    ngOnInit() {
        this.header = document.querySelector('header').offsetHeight;
        this.height = `${ window.innerHeight - this.header }px`;
    }
}