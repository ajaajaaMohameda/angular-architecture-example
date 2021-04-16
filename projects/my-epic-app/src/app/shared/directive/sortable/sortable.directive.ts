import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../core/model/person';
// export type SortColumn = keyof Person | '';
export type SortColumn = ''|'name' | 'height' | 'eye_color' | 'birth_year';
export type SortDirection = 'asc' | 'desc' | '';

const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
  column: SortColumn,
  direction: SortDirection
}

@Directive({
  selector: '[myOrgSortable]',
  host: {
    '[class.asc]':'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableDirective {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();
  constructor() { }

  rotate() {
    this.direction = rotate[this.direction];

    this.sort.emit({column: this.sortable, direction: this.direction});
  }

}
