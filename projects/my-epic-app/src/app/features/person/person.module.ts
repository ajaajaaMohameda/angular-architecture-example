import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PersonComponent, PersonListComponent, PersonShowComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule
  ]
})
export class PersonModule { }
