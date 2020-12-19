import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  exercise: string
  reps: string
  records: ""

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {

    this.http.getRecords().subscribe(data=>{
      this.records = data;
    });

  }

  addRecord(): void {
    this.http.postRecords(this.exercise, this.reps);
  }

}
