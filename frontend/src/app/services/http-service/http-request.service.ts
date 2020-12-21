import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HttpRequestService {
  
  records_url = "http://localhost:3000/records";
  workouts_url = "http://localhost:3000/workouts";
  records: string
  test: string

  constructor(private http: HttpClient) {}

  getRecords(): Observable<any> {
    return this.http.get<any>(this.records_url);
  };

  postRecords(exercise, reps): void {
    this.http.post<any>(this.records_url, 
      { name: exercise, reps: reps }).subscribe(data => {
    })
    window.location.reload();
  }

  getWorkouts(): Observable<any> {
    return this.http.get<any>(this.workouts_url);
  };


}
