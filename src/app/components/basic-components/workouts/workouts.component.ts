import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {WorkoutService} from "../../../services/workout.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateWorkoutComponentComponent} from "../../dialogs/create/create-workout-component/create-workout-component.component";
import {Workout} from "../../../models/workout.model";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workoutsObservable: any;
  workouts: any = [];
  categories: any = [];

  constructor(private workoutService: WorkoutService, public auth: AuthService, private router: Router, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.getAllWorkouts();
  }

  /**
   * get all workouts from workoutService
   */
  getAllWorkouts(): Promise<any> {
    this.workoutsObservable = this.workoutService.getAllWorkouts();

    this.workoutsObservable.subscribe((workouts: any) => {
      this.categories = [];
      workouts.map((workout: any) => {
        for(let i = 0; i < workout.exercises.length; i++) {
          if(workout.exercises[i]['einheit'] === 'Wiederholungen') workout.exercises[i]['einheit'] = 'x';
          if(workout.exercises[i]['einheit'] === 'Sekunden') workout.exercises[i]['einheit'] = 's';
        }
        this.workouts.push(workout);
        this.getAllWorkoutCategories(workout);
      })
    })
    return this.workouts;
  }

  /**
   * get all workout categories for filter list
   * @param workout
   */
  getAllWorkoutCategories(workout: Workout): void {
    if(this.categories.includes(workout.category) === false) this.categories.push(workout.category);
  }

  /**
   * get workout from selection
   * @param workout
   */
  selectWorkout(workout: Workout): void {
    this.router.navigateByUrl('/workouts/' + workout.name).then()
  }

  /**
   * open createWorkout dialog
   */
  openCreateWorkoutDialog(): void {
    this.dialog.open(CreateWorkoutComponentComponent);
  }

  /**
   * filter workouts by category
   * @param category
   */
  async filterByCategory(category: string): Promise<void> {
    this.workouts = [];
    let workouts = await this.getAllWorkouts();
    let filteredWorkouts: any = [];

    setTimeout(() => {
      workouts.map((workout: Workout) => {
        if(workout.category === category) {
          filteredWorkouts.push(workout);
        }
      })

      this.workouts = filteredWorkouts;
    }, 100)


  }
}
