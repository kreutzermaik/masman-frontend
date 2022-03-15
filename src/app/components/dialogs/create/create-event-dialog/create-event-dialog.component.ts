import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {CalendarService} from "../../../../services/calendar/calendar.service";

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss']
})
export class CreateEventDialogComponent implements OnInit {

  event: any;
  date: Date = new Date();
  location: any;
  selectedLocation: any;

  constructor(public auth: AuthService, public calendar: CalendarService) { }

  ngOnInit(): void {
  }

}
