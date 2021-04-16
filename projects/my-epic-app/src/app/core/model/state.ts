import { SortColumn, SortDirection } from '../../shared/directive/sortable/sortable.directive';

export interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn,
  sortDirection: SortDirection
}
