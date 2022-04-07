import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from "../components/basic-components/user-profile/user-profile.component";
import {AuthGuard} from "../guards/auth.guard";
import {LoginComponent} from "../components/auth/login/login.component";
import {OverviewComponent} from "../views/overview/overview.component";
import {GoalsComponent} from "../components/basic-components/goals/goals.component";
import {WorkoutsComponent} from "../components/basic-components/workouts/workouts.component";
import {WorkoutComponent} from "../components/basic-components/workout/workout.component";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'workouts/:workoutId', component: WorkoutComponent },
  { path: 'profile', component: UserProfileComponent,  canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
