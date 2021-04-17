import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';
import { PersonShowComponent } from './person-show/person-show.component';

const routes: Routes = [{ path: '', component: PersonComponent },
{ path: ':id', component: PersonShowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
