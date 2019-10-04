import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssuesSearcherComponent} from './components/issues-searcher/issues-searcher.component';


const routes: Routes = [
  {
    path: '',
    component: IssuesSearcherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
