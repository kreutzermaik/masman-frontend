import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "../../../services/workout.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutObservable: any;
  workout: any;

  constructor(private workoutService: WorkoutService, public auth: AuthService) { }

  ngOnInit(): void {
      this.workoutObservable = this.workoutService.getWorkout( "QFPn1KlHlAgINLUZG4m0");
      this.workoutObservable.subscribe((workout: any) => {
        this.workout = workout;
      })
  }

}
