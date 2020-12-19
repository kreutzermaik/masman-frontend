import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  records: ""
  constructor(private http: HttpClient) {}

  getRequest(): String {
    this.http.get<any>('http://localhost:3000/records').subscribe(data => {
      this.records = data;
      console.log(this.records)
    });
    return this.records;
  }

  // display(data) {
  //   console.log(data);
  //   this.records = data;
  //   console.log(this.records)
  // }

}
