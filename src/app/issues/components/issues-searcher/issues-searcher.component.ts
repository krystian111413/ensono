import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, filter, map} from 'rxjs/operators';
import {IssuesService} from '../../services/issues.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-issues-searcher',
  templateUrl: './issues-searcher.component.html',
  styleUrls: ['./issues-searcher.component.scss']
})
export class IssuesSearcherComponent implements OnInit {

  searchForm: FormGroup;
  issues: Issue[];
  isFetchingIssues = false;

  constructor(private formBuilder: FormBuilder,
              private issuesSearcherService: IssuesService) {
    this.defineSearchForm();
  }


  ngOnInit(): void {
    this.subscribeSearchForm();
  }

  setSearchBox(labelName: string) {
    this.searchForm.controls.searchText.setValue(labelName);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  private subscribeSearchForm() {
    this.searchForm
      .controls
      .searchText
      .valueChanges
      .pipe(
        debounceTime(1000),
        map(value => value.trim()),
        filter((value: string) => value.length > 2)
      ).subscribe(value => {
      this.isFetchingIssues = true;
      this.issuesSearcherService.getOpenIssues(value).subscribe(issues => {
        this.isFetchingIssues = false;
        this.issues = issues;
      });
    });
  }

  private defineSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }
}
