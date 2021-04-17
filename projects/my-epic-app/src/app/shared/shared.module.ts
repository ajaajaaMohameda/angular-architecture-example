import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TagListComponent } from './tag-list/tag-list.component';
import { RouterModule } from '@angular/router';
import { SortableDirective } from './directive/sortable/sortable.directive';
import { PaginaterComponent } from './layout/paginater/paginater.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [TagListComponent, SortableDirective, PaginaterComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,
    // material
    MatCardModule,
    MatButtonModule,
        // ngBootstrap
    NgbPaginationModule,
    IconsModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,
        // ngBootstrap
    NgbPaginationModule,
    IconsModule,

    // local
    TagListComponent,
    PaginaterComponent,
    SortableDirective
  ]
})
export class SharedModule {}
