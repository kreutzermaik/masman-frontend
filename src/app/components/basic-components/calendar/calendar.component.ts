import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {CalendarService} from "../../../services/calendar/calendar.service";
import { CalendarOptions } from '@fullcalendar/angular';
import {MatDialog} from "@angular/material/dialog";
import {CreateEventDialogComponent} from "../../dialogs/create/create-event-dialog/create-event-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  events: any = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: []
  };

  constructor(public auth: AuthService, public calendar: CalendarService, public dialog: MatDialog, private router: Router) {
    this.getEvents();
  }

  getEvents() {
    this.calendar.getEventsCollection().then(events => {
      let event = events as Array<{event: string; date: string}>;
      for(let i = 0; i < event.length; i++) {
        this.events.push({title: event[i].event, date: event[i].date})
        this.calendarOptions.events = this.events;
      }
    });
  }

  ngOnInit(): void {
  }

  openCreateEventDialog(): void {
    this.dialog.open(CreateEventDialogComponent);
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login').then();
  }

}
