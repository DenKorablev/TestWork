import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[zdsTolltipName]'
})
export class TolltipNameDirective {

  elem: HTMLDivElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onVisibleTooltip() {
    this.elem = this.renderer.createElement('div');
    this.renderer.appendChild(this.elementRef.nativeElement, this.elem);
    this.elem.setAttribute('class', 'tolltip-name');
    this.elem.innerHTML = this.elementRef.nativeElement.innerText;
  }

  @HostListener('mouseleave') onHiddenTooltip() {
    this.renderer.removeChild(this.elementRef.nativeElement, this.elem);   
  }
}

