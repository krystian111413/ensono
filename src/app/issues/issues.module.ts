import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IssuesRoutingModule} from './issues-routing.module';
import {IssuesSearcherComponent} from './components/issues-searcher/issues-searcher.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {IssuesListComponent} from './components/issues-searcher/issues-list/issues-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {IssuesService} from './services/issues.service';


@NgModule({
  declarations: [IssuesSearcherComponent, IssuesListComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  providers: [IssuesService]
})
export class IssuesModule { }
