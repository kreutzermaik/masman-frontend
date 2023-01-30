import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {CalendarService} from "../../../../services/calendar.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import DateTimeUtils from "../../../../utils/DateTimeUtils";

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.scss']
})
export class EditEventDialogComponent implements OnInit {

  date: any = DateTimeUtils.formatDate(this.data.date);

  constructor(public auth: AuthService, public calendar: CalendarService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }
}
