import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaterComponent } from './paginater.component';

describe('PaginaterComponent', () => {
  let component: PaginaterComponent;
  let fixture: ComponentFixture<PaginaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
