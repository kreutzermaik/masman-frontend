import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  records: string
  test: string

  constructor(private http: HttpClient) {}

  getRecords(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/records');
  };

  postRecords(exercise, reps): void {
    this.http.post<any>('http://localhost:3000/records', 
      { name: exercise, reps: reps }).subscribe(data => {
    })
    window.location.reload();
  }


}
