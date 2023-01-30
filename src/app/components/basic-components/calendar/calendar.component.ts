import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CalendarService} from "../../../services/calendar.service";
import { CalendarOptions } from '@fullcalendar/angular';
import {MatDialog} from "@angular/material/dialog";
import {CreateEventDialogComponent} from "../../dialogs/create/create-event-dialog/create-event-dialog.component";
import {Router} from "@angular/router";
import {EditEventDialogComponent} from "../../dialogs/edit/edit-event-dialog/edit-event-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  events: any = [];
  boulderVisitsCounterOlymp: number = 0;
  boulderVisitsCounterRocklands: number = 0;
  locations: any = ['Boulder Olymp', 'Rocklands'];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    events: [],
    eventClick: this.openEditEventDialog.bind(this)
  };

  constructor(public auth: AuthService, public calendar: CalendarService, public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
    this.countBoulderVisits();
  }

  getEvents() {
    this.calendar.getEventsCollection().then(events => {
      let event = events as Array<{event: string; date: string, location: string}>;
      for(let i = 0; i < event.length; i++) {
        if(event[i].location === 'Boulder Olymp') {
          this.setChartOption(event[i], '#A3CBD3', '#000');
        } else if(event[i].location === 'Rocklands') {
          this.setChartOption(event[i], '#960000', '#fff');
        } else if(event[i].event === 'Laufen') {
          this.setChartOption(event[i], '#faebd7', '#000');
        } else if(event[i].event === 'Dehnen') {
          this.setChartOption(event[i], '#ffb6c1', '#000');
        } else if(event[i].event === 'Kraft') {
          this.setChartOption(event[i], '#d2691e', '#fff');
        } else if(event[i].event === 'HIT') {
          this.setChartOption(event[i], '#f85c5c', '#fff');
        } else if(event[i].event === 'Beine') {
          this.setChartOption(event[i], '#90ba90', '#fff');
        } else if(event[i].location === '' || event[i].location === undefined) {
          this.setChartOption(event[i], '#3F51B5', '#fff');
        }
      }
    });
  }

  setChartOption(event: any, color: string, textColor: string) {
    this.events.push({
      title: event.event,
      date: event.date,
      location: event.location,
      color: color,
      textColor: textColor,
    })
    this.calendarOptions.events = this.events;
  }

  countBoulderVisits() {
    setTimeout(() => {
      this.events.map((event: any) => {
        if(event.location === 'Boulder Olymp') {
          this.boulderVisitsCounterOlymp = this.boulderVisitsCounterOlymp + 1;
        } else if(event.location === 'Rocklands') {
          this.boulderVisitsCounterRocklands = this.boulderVisitsCounterRocklands + 1;
        }
      })
    }, 2000)
  }

  openCreateEventDialog(): void {
    this.dialog.open(CreateEventDialogComponent);
  }

  openEditEventDialog(arg: any): void {
    // console.log(event.target.firstChild);
    // console.log(event.target.nextSibling.innerText);

    console.log(arg.event._def.extendedProps.location)

    this.dialog.open(EditEventDialogComponent, {
      data: {
        event: arg.event._def.title,
        date: arg.event._instance.range.start,
        location: arg.event._def.extendedProps.location
      }
    });

  }

  navigateToLogin() {
    this.router.navigateByUrl('/login').then();
  }

}
