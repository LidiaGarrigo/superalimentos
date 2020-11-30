import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {

    const letra = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < items.length; i++) {
      if (items[i][field].toLowerCase().includes(value.toLowerCase())){
        letra.push(items[i]);
      }
    }
    return letra;
  }
}
