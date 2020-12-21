import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

/** Workout: datastructure
 *  database: masman
 *  table: workous
 *  colums: id, name, time (id is the name of the workout, e.g. Calorie-Burner)
 *  get data of a specific workout: select * from workouts where id = ?
 */ 

  timeLeft: number = 60;
  interval;

  workouts: ""

  exercises: [
    {
      "name": "Jumps"
    },
    {
      "name": "pushups"
    }
  ]

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {
    
    this.http.getWorkouts().subscribe(data=>{
      this.workouts = data;
    });

  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
