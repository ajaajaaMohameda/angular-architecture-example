import { Directive } from '@angular/core';
import { Person } from '../../../core/model/person';

export type SortColumn = keyof Person | '';
export type SortDirection = 'asc' | 'desc' |
@Directive({
  selector: '[myOrgSortable]',
  host: {
    '[class.asc]':'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableDirective {

  constructor() { }

}
