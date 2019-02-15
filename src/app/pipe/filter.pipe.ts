import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items, searchProduct: string): any {
    if(items.length === 0 || searchProduct === '') {
      return items;
    }

    return items.filter(item => item.name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1);
  }
}
