import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../services/http-service/http-request.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  nutrition = [];

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {
    this.http.getNutrition().subscribe(data => {
      this.nutrition = data;
    });
  }

}
