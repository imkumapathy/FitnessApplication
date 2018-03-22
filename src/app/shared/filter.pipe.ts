import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(listofValues: any, searchText: any): any {
    if(searchText == null) return listofValues;

    return listofValues.filter(function(filter){
      return filter.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}