import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {WorkoutService} from "../../../services/workout.service";
import {Router} from "@angular/router";
import {CreateEventDialogComponent} from "../../dialogs/create/create-event-dialog/create-event-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateWorkoutComponentComponent} from "../../dialogs/create/create-workout-component/create-workout-component.component";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workoutsObservable: any;
  workouts: any = [];

  constructor(private workoutService: WorkoutService, public auth: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.workoutsObservable = this.workoutService.getAllWorkouts();

      this.workoutsObservable.subscribe((workouts: any) => {
        workouts.map((workout: any) => {
          this.workouts.push(workout);
        })
      })
  }

  /**
   * get workout from selection
   * @param workout
   */
  selectWorkout(workout: any): void {
    this.router.navigateByUrl('/workouts/' + workout.name).then()
  }

  openCreateWorkoutDialog(): void {
    this.dialog.open(CreateWorkoutComponentComponent);
  }
}
