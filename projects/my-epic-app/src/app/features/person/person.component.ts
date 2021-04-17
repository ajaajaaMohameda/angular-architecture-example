import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PersonService } from '../../core/service/person/person.service';
import { Observable } from 'rxjs';
import { Person } from '../../core/model/person';
import { SortEvent, SortableDirective } from '../../shared/directive/sortable/sortable.directive';

@Component({
  selector: 'my-org-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;
  people$: Observable<Person[]>;
  total$: Observable<number>;
  constructor(
    public personService: PersonService
  ) {
    this.people$ = this.personService.people$;
    this.total$ = this.personService.total$;
   }

  ngOnInit(): void {
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.myOrgSortable !== column) {
        header.direction = '';
      }
    });

    this.personService.sortColumn = column;
    this.personService.sortDirection = direction;
  }

  goTo() {

  }

}
