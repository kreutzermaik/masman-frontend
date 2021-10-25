import {Component, OnInit} from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public http: HttpRequestService, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}

