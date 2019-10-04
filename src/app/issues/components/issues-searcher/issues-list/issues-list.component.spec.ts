import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IssuesListComponent} from './issues-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {IssuesService} from '../../../services/issues.service';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: IssuesService, useValue: jasmine.createSpyObj(['getLikedIssues'])}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
