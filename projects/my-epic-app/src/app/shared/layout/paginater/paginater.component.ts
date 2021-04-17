import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-org-paginater',
  templateUrl: './paginater.component.html',
  styleUrls: ['./paginater.component.scss']
})
export class PaginaterComponent implements OnInit {

  @Input() collectionSize: any;
  @Input() personService: any;

  constructor() { }

  ngOnInit(): void {
    console.log("the pagesize")
  }

}
