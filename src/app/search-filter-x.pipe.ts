import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterX'
})
export class SearchFilterXPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.nome.toLowerCase().includes(searchText);
    });
   }

}
