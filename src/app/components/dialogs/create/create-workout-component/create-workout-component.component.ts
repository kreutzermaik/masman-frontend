import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {WorkoutService} from "../../../../services/workout.service";

@Component({
  selector: 'app-create-workout-component',
  templateUrl: './create-workout-component.component.html',
  styleUrls: ['./create-workout-component.component.scss']
})
export class CreateWorkoutComponentComponent implements OnInit {

  name: string = '';
  category: string = '';

  exerciseName: string = '';
  exerciseValue: string = '';
  exerciseEinheit: string = '';
  exerciseSets: string = '';
  exerciseWeight: string = '';

  exercise: any = [];

  constructor(public auth: AuthService, public workout: WorkoutService) { }

  ngOnInit() {}

  addExercise(): void {
    if(this.exerciseName !== '') {
      this.exercise.push({
        name: this.exerciseName,
        value: this.exerciseValue,
        einheit: this.exerciseEinheit,
        weight: this.exerciseWeight,
        sets: this.exerciseSets,
      })
      // Reset input fields
      this.exerciseName = '';
      this.exerciseValue = '';
      this.exerciseEinheit = '';
      this.exerciseSets = '';
      this.exerciseWeight = '';
    }
  }

}
