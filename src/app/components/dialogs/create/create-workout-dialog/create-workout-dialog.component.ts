import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {WorkoutService} from "../../../../services/workouts/workout.service";

@Component({
  selector: 'app-create-workout-dialog',
  templateUrl: './create-workout-dialog.component.html',
  styleUrls: ['./create-workout-dialog.component.scss']
})
export class CreateWorkoutDialogComponent implements OnInit {

  name: any;
  category: any;
  rounds: any;
  exercise1: any;
  exercise2: any;
  exercise3: any;
  exercise4: any;

  constructor(public auth: AuthService, public workouts: WorkoutService) { }

  ngOnInit(): void {
  }



}
