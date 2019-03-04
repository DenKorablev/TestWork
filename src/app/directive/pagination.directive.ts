import { Directive, HostListener, ElementRef } from '@angular/core';
import { AddProductsService } from '../service/addProducts.service';

@Directive({
  selector: '[zdsPagination]'
})
export class PaginationDirective {

  constructor(
    private addProductsService: AddProductsService,
    private element: ElementRef
  ) { }

  @HostListener('window:resize') resizePaginationCounter() {
    let width = this.element.nativeElement.clientWidth;
    if(width > 1200) {
      this.addProductsService.itemsPer = 12;
    }
    if(width < 1200) {
      this.addProductsService.itemsPer = 10;
    }
    if(width < 980) {
      this.addProductsService.itemsPer = 8;
    }
    if(width < 800) {
      this.addProductsService.itemsPer = 6;
    }
    if(width < 600) {
      this.addProductsService.itemsPer = 4;
    }
  }
}
