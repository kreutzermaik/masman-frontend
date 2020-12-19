import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private get: HttpRequestService) { }

  ngOnInit(): void {

    let data = this.get.getRequest();
    console.log(data)

  }

  addRecord(): void {
    this.http.post<any>('http://localhost:3000/records', 
      { name: this.exercise, reps: this.reps }).subscribe(data => {
    })
    window.location.reload();
  }

}
