import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {AuthService} from "../../../services/auth/auth.service";
import {CalendarService} from "../../../services/calendar/calendar.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {WorkoutService} from "../../../services/workouts/workout.service";
import {CreateWorkoutDialogComponent} from "../../dialogs/create/create-workout-dialog/create-workout-dialog.component";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workoutList = [];

  constructor(public auth: AuthService, public workouts: WorkoutService, public dialog: MatDialog, private router: Router) {
    this.getWorkouts();
  }

  getWorkouts() {
    this.workouts.getWorkoutsCollection().then((workouts: any) => {
      this.workoutList = workouts;
    });
  }

  ngOnInit(): void {
  }

  openCreateWorkoutDialog(): void {
    this.dialog.open(CreateWorkoutDialogComponent);
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login').then();
  }

}
