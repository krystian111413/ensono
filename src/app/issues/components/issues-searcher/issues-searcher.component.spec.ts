import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IssuesSearcherComponent} from './issues-searcher.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {IssuesService} from '../../services/issues.service';
import {FormBuilder} from '@angular/forms';

describe('IssuesSearcherComponent', () => {
  let component: IssuesSearcherComponent;
  let fixture: ComponentFixture<IssuesSearcherComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesSearcherComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        FormBuilder,
        {provide: IssuesService, useValue: jasmine.createSpyObj([''])}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
