import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-org-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() collectionSize: any;
  @Input() page: any;
  @Input() pageSize: any;

  constructor() { }

  ngOnInit(): void {
    console.log("the pagesize")
  }

}
