import { Injectable, PipeTransform } from '@angular/core';
import { Person } from '../../model/person';
import { SortColumn, SortDirection } from '../../../shared/directive/sortable/sortable.directive';
import { Helper } from '../../helper/helper';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { State } from '../../model/state';
import { SearchResult } from '../../model/searchResult';
import { DecimalPipe } from '@angular/common';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { CommunicatorService } from '../communicator/communicator.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _people$ = new BehaviorSubject<Person[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  }
  constructor(private pipe: DecimalPipe, private communicatorService: CommunicatorService) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._people$.next(result.people);
      this._total$.next(result.total);
    })

    this._search$.next();
  }

  get people$() {
    return this._people$.asObservable();
  }

  get total$() {
    return this._total$.asObservable();
  }

  get loading$() {
    return this._loading$.asObservable();
  }

  get page() {
    return this._state.page;
  }

  get pageSize() {
    return this._state.pageSize;
  }

  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    let people: Person[] = [];
    // 1. sort
    people = Helper.sort(people, sortColumn, sortDirection);

    // 2.filter
    people = people.filter(person => {
      return Helper.matches(person, searchTerm, this.pipe)
    });
    const total = people.length;

    // 3. paginate
    people = people.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

    return of({ people, total });
  }

  get(): Observable<any> {
    const uri = '/people';
    return this.communicatorService.get(uri);
  }
}
