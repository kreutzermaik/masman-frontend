import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../../../services/http-service/http-request.service';

@Component({
  selector: 'app-create-plan-dialog',
  templateUrl: './create-plan-dialog.component.html',
  styleUrls: ['./create-plan-dialog.component.scss']
})
export class CreatePlanDialogComponent implements OnInit {

  category: string;

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {
  }

  postToAPI() {
    this.http.postPlan(this.category);
  }

}
