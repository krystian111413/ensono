import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../models/issue';
import {environment} from '../../../environments/environment';

@Injectable()
export class IssuesService {
  private issuesLiked = 'issuesLiked';
  constructor(private httpClient: HttpClient) {
  }

  getOpenIssues(filterValue: string): Observable<Issue[]> {
    const query = {
      state: 'open',
      labels: filterValue
    };
    return this.httpClient.get<Issue[]>(`${environment.urlApi}/issues`, {params: query});
  }

  getLikedIssues(): number[] {
    const likedIssuesFromLocalStorage = JSON.parse(localStorage.getItem(this.issuesLiked));
    return likedIssuesFromLocalStorage ? likedIssuesFromLocalStorage : [];
  }

  setLikedIssues(issueIds: number[]): void {
    localStorage.setItem(this.issuesLiked, JSON.stringify(issueIds));
  }
}
