import { Component } from '@angular/core';
import { PersonService } from './core/service/person/person.service';

@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-epic-app';

  constructor(private personService: PersonService) {

  }
  ngOninit() {
    this.personService.get().subscribe(res => {
      console.log("the res", res);
    })
  }
}
