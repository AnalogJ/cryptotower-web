import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';

//third party
// import { LocalForageModule } from 'ngx-localforage';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HypergridDirective } from './directives/hypergrid.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HypergridDirective
  ],
  imports: [
    BrowserModule,
    // LocalForageModule.forRoot(),
    RouterModule.forRoot([
      //Public Endpoints
      { path: 'dashboard', component: DashboardComponent },

      // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
      // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'dashboard' },
    ]),
  ],
  providers: [
      DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
