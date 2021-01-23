import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HttpRequestService {
  recordsUrl = 'http://localhost:3000/records';
  workoutsUrl = 'http://localhost:3000/workouts';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<any> {
    return this.http.get<any>(this.recordsUrl);
  }

  postRecords(exercise, reps): void {
    this.http.post<any>(this.recordsUrl,
      { name: exercise, reps: (reps) }).subscribe(data => {
    });
    window.location.reload();
  }

  getWorkouts(): Observable<any> {
    return this.http.get<any>(this.workoutsUrl);
  }


}
