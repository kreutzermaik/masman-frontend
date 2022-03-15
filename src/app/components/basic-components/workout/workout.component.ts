import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WorkoutService} from "../../../services/workouts/workout.service";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutId: any;

  constructor(public workouts: WorkoutService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getRouteParams();

    this.auth.user$.subscribe(user => {
      this.workouts.getAllWorkouts(user.uid, this.workoutId).subscribe(
        (workout: any) => console.log(workout.exists ? workout.data().id : undefined)
      );
    });
  }

  /**
   * get punit by Url parameter
   */
  getRouteParams() {
    const routeParams = this.route.snapshot.paramMap;
    this.workoutId = routeParams.get('workoutId');
  }

}
