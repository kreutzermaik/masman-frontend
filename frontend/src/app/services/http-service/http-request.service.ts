import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  exercisesUrl = 'http://85.214.121.36:3000/exercises';
  recordsUrl = 'http://85.214.121.36:3000/records';
  username: string;
  isLoggedIn = false;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}

  getRecords(): Observable<any> {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
    return this.http.get<any>(this.recordsUrl, {params: {username: this.username}});
  }

  postRecords(date, exercise, result, exerciseId, username): void {
    this.http.post<any>(this.recordsUrl,
      { date: (date), name: (exercise), result: (result), exerciseId: (exerciseId), username: (username) }).subscribe(data => {
    }, error => console.log('Rekord konnte nicht hinzugefügt werden.'));
    window.setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  getExercises(): Observable<any> {
    return this.http.get<any>(this.exercisesUrl);
  }


}
