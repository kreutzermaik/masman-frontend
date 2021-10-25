import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../services/http-service/http-request.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workouts = [];

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {
    this.http.getWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  startWorkout(): void {
    alert('start');
  }

}
