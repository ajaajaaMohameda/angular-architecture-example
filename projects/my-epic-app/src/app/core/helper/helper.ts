import { Person } from '../model/person';
import { SortColumn } from '../../shared/directive/sortable/sortable.directive';
import { PipeTransform } from '@angular/core';

export const Helper = {
  compare: (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0,
  sort: (people: Person[], column: SortColumn, direction: string): Person[] => {
    if (direction === '' || column === '') {
      return people;
    }
    return [...people].sort((a, b) => {
      const res = Helper.compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  },
  matches: (person: Person, term: string, pipe: PipeTransform) => {
    return person.name.toLowerCase().includes(term.toLowerCase())
  }
}
