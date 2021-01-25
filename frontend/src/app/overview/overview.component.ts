import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  exercises: string;
  date: string;
  selectedExercise: string;
  exercise: string;
  result: string;
  records: string;
  exerciseId: 0;

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {

    this.http.getRecords().subscribe(data => {
      this.records = data;
    });

    this.http.getExercises().subscribe(data => {
      this.exercises = data;
    });

  }

  addRecord(): void {
    this.http.postRecords(this.date, this.selectedExercise, this.result, this.exerciseId);
  }

}
