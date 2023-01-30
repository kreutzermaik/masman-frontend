import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "../../../services/workout.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CalendarService} from "../../../services/calendar.service";
import {AuthService} from "../../../services/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import DateTimeUtils from "../../../utils/DateTimeUtils";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutIdFromRoute: any;
  workoutObservable: any;
  workout: any;
  index: number = 0;
  exerciseIndex: number = 0;
  activeExercise: any;
  displayActiveExercise: string = 'none';
  displayFinishAlert: string = 'none';
  displayStartWorkoutButton: string = 'block';

  constructor(public workoutService: WorkoutService, private route: ActivatedRoute, public auth: AuthService,
              private afs: AngularFirestore, private router: Router, private calendarService: CalendarService, ) { }

  ngOnInit(): void {
    this.getRouteParams();

    this.workoutObservable = this.workoutService.getWorkout( this.workoutIdFromRoute);
    this.workoutObservable.subscribe((workout: any) => {
      this.workout = workout;
      this.activeExercise = this.workout.exercises[this.index];
    })

  }

  /**
   * get punit by Url parameter
   */
  getRouteParams() {
    const routeParams = this.route.snapshot.paramMap;
    this.workoutIdFromRoute = routeParams.get('workoutId');
  }

  startWorkout(): void {
    this.displayActiveExercise = 'block';
    this.displayStartWorkoutButton = 'none';
  }

  /**
   * go to next set of the exercise
   * @param index
   */
  nextSet(index: number): void {
    this.index = index + 1;

    if(this.workout.exercises[this.exerciseIndex] !== undefined) {
      if(this.workout.exercises[this.exerciseIndex].sets - index === 1) {
        if(Object.keys(this.workout.exercises).length - this.exerciseIndex !== 1) {
          this.nextExercise();
        } else {
          this.finishWorkout();
        }
      }
    }
  }

  /**
   * go to next exercise
   */
  nextExercise(): void {
    this.exerciseIndex++;
    this.index = 0;
    this.activeExercise = this.workout.exercises[this.exerciseIndex];
  }

  /**
   * end workout and show alert
   */
  finishWorkout(): void {
    this.displayActiveExercise = 'none';
    this.displayFinishAlert = 'block';

    this.auth.user$.subscribe(user => {
      this.calendarService.updateCalendarData(user.uid, this.workout.category, DateTimeUtils.formatDate(new Date()), '');
    });

    setTimeout(() => {
      this.router.navigateByUrl('workouts').then();
    }, 5000);
  }
}
