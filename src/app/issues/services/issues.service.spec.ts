import {TestBed} from '@angular/core/testing';

import {IssuesService} from './issues.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import SpyObj = jasmine.SpyObj;

describe('IssuesService', () => {
  let service: IssuesService;
  let httpClient: SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IssuesService,
        {provide: HttpClient, useValue: jasmine.createSpyObj(['get'])},
        {provide: localStorage, useValue: jasmine.createSpyObj(['getItem'])}
      ]
    });
    service = TestBed.get(IssuesService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('When getOpenIssues should call get rest method', () => {
    service.getOpenIssues('test');
    expect(httpClient.get).toHaveBeenCalledWith(`${environment.urlApi}/issues`, {params: {state: 'open', labels: 'test'}});
  });
});
