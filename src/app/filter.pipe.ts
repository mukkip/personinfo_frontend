import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './service/http-client.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(persons: Person[], searchText: string):Person[] {

    if (!persons) {
      return [];
    }
    if (!searchText) {
      return persons;
    }
    searchText = searchText.toLocaleLowerCase();

    return persons.filter(person => {
      console.log(person);
     return (person.firstName.toLocaleLowerCase().indexOf(searchText)!==-1 || person.lastName.toLocaleLowerCase().indexOf(searchText)!==-1 );
    });
  }
}