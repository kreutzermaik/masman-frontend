import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from '../views/overview/overview.component';
import {GoogleLoginComponent} from '../components/auth/google-login/google-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'google-callback', component: OverviewComponent },
  { path: 'übersicht', component: OverviewComponent },
  { path: 'login', component: GoogleLoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
