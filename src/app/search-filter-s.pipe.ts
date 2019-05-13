import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterS'
})
export class SearchFilterSPipe implements PipeTransform {

  transform(items: any[], searchText: string,  type: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    type = type.toLowerCase();

    if(type === "titulo"){
      return items.filter( it => {
        return it.titulo.toLowerCase().includes(searchText);
      });
    } else if (type === 'ano'){
      return items.filter( it => {
        return it.anoLancamento.toLowerCase().includes(searchText);
      });
    } else {
      return items.filter( it => {
        return it.lingua.toLowerCase().includes(searchText);
      });
    }
   }

}
