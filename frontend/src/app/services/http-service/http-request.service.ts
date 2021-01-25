import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  exercisesUrl = 'http://localhost:3000/exercises';
  recordsUrl = 'http://localhost:3000/records';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<any> {
    return this.http.get<any>(this.recordsUrl);
  }

  postRecords(date, exercise, result, exerciseId): void {
    this.http.post<any>(this.recordsUrl,
      { date: (date), name: (exercise), result: (result), exerciseId: (exerciseId) }).subscribe(data => {
    });
    window.setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  getExercises(): Observable<any> {
    return this.http.get<any>(this.exercisesUrl);
  }


}
