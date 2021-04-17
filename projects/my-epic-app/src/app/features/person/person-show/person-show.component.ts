import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../core/service/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../core/model/person';

@Component({
  selector: 'my-org-person-show',
  templateUrl: './person-show.component.html',
  styleUrls: ['./person-show.component.scss']
})
export class PersonShowComponent implements OnInit {

  person: Person;
  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.personService.getOne(id).subscribe(res => {
        if(!res) return;
        this.person = res;
      })
    })
  }

  ngOnInit(): void {
  }

}
