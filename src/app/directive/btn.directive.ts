import { Directive, ElementRef, Renderer2, Input, OnInit, DoCheck } from '@angular/core';

@Directive({
  selector: '[zdsBtn], zdsBtn'
})
export class BtnDirective implements OnInit, DoCheck {

  @Input() text: string;
  @Input() typeValue: string;
  @Input() disable: string;
  @Input() className: string = 'btn-reset';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  elem: HTMLButtonElement = this.renderer.createElement('button');
  ngOnInit() {
    this.renderer.appendChild(this.elementRef.nativeElement, this.elem);
    this.elem.setAttribute('type', this.typeValue);
    this.elem.setAttribute('class', this.className);
    if (this.disable !== undefined || this.disable !== 'true') {
      this.elem.setAttribute('disabled', '');
    }
    this.elem.innerHTML = this.text;
  }

  ngDoCheck() {
    if (this.disable === 'true') {
      this.elem.setAttribute('disabled', '');
    } else {
      this.elem.removeAttribute('disabled');
    }
  }
}
