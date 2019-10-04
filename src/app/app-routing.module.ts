import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssuesModule} from './issues/issues.module';


const routes: Routes = [
  {
    path: 'issues',
    loadChildren: () =>  IssuesModule
  },
  {
    path: '**',
    redirectTo: 'issues'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
