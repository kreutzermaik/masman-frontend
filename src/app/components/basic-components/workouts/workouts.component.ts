import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {WorkoutService} from "../../../services/workouts/workout.service";
import {CreateWorkoutDialogComponent} from "../../dialogs/create/create-workout-dialog/create-workout-dialog.component";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent {

  workoutList = [];

  constructor(public auth: AuthService, public workouts: WorkoutService, public dialog: MatDialog, private router: Router) {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workouts.getWorkoutsCollection().then((workouts: any) => {
      this.workoutList = workouts;
    });
  }

  openCreateWorkoutDialog(): void {
    this.dialog.open(CreateWorkoutDialogComponent);
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login').then();
  }

  startWorkout(workoutId: any): void {
    this.router.navigateByUrl('workouts/' + workoutId).then(() => window.location.reload());
  }

}
