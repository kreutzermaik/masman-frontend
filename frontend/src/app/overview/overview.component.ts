import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  exercise: string
  reps: string

  records: ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:3000/records').subscribe(data => {
      this.records = data;
    })

  }

  addRecord(): void {
    this.http.post<any>('http://localhost:3000/records', 
      { name: this.exercise, reps: this.reps }).subscribe(data => {
    })
    window.location.reload();
  }

}
