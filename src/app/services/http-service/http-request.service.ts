import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GoogleLoginComponent} from '../../components/auth/google-login/google-login.component';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  constructor(private http: HttpClient) {}

  async getCurrentUser() {
    return await GoogleLoginComponent.getCurrentUser();
  }

  getPlans() {
    return this.getCurrentUser().then(user => {
      return this.http.get<any>(environment.apiURL + 'plans/' + user.getId());
    });
  }

  postPlan(category): void {
    this.getCurrentUser().then(user => {
      this.http.post<any>(environment.apiURL + 'plans/' + user.getId(),
        {
          category: (category),
          userId: user.getId(),
        }).subscribe(data => {
      }, error => console.log('Plan konnte nicht hinzugefügt werden.'));
      window.setTimeout(() => {
        window.location.reload();
      }, 1);
    });
  }

  getCheckedDays(category) {
    return this.getCurrentUser().then(user => {
      return this.http.get<any>(environment.apiURL + 'plan/' + category + '/' + user.getId());
    });
  }

  postCheckedDay(date, category, kw, done): void {
    this.getCurrentUser().then(user => {
      this.http.post<any>(environment.apiURL + 'plan/' + category + '/' + user.getId(),
        {
          date: (date),
          category: (category),
          kw: (kw),
          done: (done),
          userId: user.getId(),
        }).subscribe(data => {
      }, error => console.log('Checked Day konnte nicht hinzugefügt werden.'));
    });
  }

}
