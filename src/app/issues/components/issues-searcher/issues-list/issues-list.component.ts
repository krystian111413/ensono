import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Issue} from '../../../models/issue';
import {IssuesService} from '../../../services/issues.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {

  @Input() issues: Issue[];
  @Input() showLoadingBar = false;
  @Output() labelClick: EventEmitter<string> = new EventEmitter<string>();
  likedIssueIds: number[] = [];

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit(): void {
    this.loadLikedIssues();
  }

  onLikeOrUnlikeEvent(id: number): void {
    if (this.isLiked(id)) {
      this.likedIssueIds = this.likedIssueIds.filter(value => value !== id);
    } else {
      this.likedIssueIds.push(id);
    }
    this.issuesService.setLikedIssues(this.likedIssueIds);
  }

  isLiked(id: number): boolean {
    return this.likedIssueIds.includes(id);
  }

  onLabelClick(labelName: string) {
    this.labelClick.emit(labelName);
  }

  formatDate(dateAsString: string): string {
    return new Date(dateAsString).toLocaleDateString();
  }

  private loadLikedIssues(): void {
    this.likedIssueIds = this.issuesService.getLikedIssues();
  }
}
