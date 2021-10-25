import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../services/http-service/http-request.service';
import DateTimeUtils from '../../utils/DateTimeUtils';
import {MatDialog} from "@angular/material/dialog";
import {CreatePlanDialogComponent} from "../dialogs/create/create-plan-dialog/create-plan-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarWeek: number = DateTimeUtils.getCalendarWeek();
  plans = [];
  checkedDays = [];
  calendarWeekList = [];
  selectedCategory = '';
  selectedKw;
  checkedMo = false;
  checkedDi = false;
  checkedMi = false;
  checkedDo = false;
  checkedFr = false;
  checkedSa = false;
  checkedSo = false;

  constructor(private http: HttpRequestService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.fetchPlans();
    this.createOptionsForSelectBox();
  }

  async fetchPlans() {
    const fetch = await this.http.getPlans();
    fetch.subscribe(data => {
      this.plans = data;
    });
  }

  async fetchCheckedDays(category) {
    const fetch = await this.http.getCheckedDays(category);
    fetch.subscribe(data => {
      this.checkedDays = data;
      this.setCheckboxesForKw(this.calendarWeek);
    });
  }

  updateWeekView(kw) {
    this.calendarWeek = kw;
  }

  updateCheckboxes() {
    this.setCheckboxesForKw(this.selectedKw);
  }

  createOptionsForSelectBox() {
    for (let i = 1; i <= 51; i++) {
      this.calendarWeekList.push(i);
    }
  }

  onCheckboxChange(event, dayNumber) {
    const firstDayOfTheWeek = DateTimeUtils.getFirstDayOfTheWeek(new Date(), 1);

    if (dayNumber === 0) { this.postCheckedDayToAPI(firstDayOfTheWeek, event.checked); this.checkedMo = true; }
    if (dayNumber === 1) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 1)), event.checked); }
    if (dayNumber === 2) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 2)), event.checked); }
    if (dayNumber === 3) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 3)), event.checked); }
    if (dayNumber === 4) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 4)), event.checked); }
    if (dayNumber === 5) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 5)), event.checked); }
    if (dayNumber === 6) { this.postCheckedDayToAPI(new Date(firstDayOfTheWeek.setDate(firstDayOfTheWeek.getDate() + 6)), event.checked); }
  }

  postCheckedDayToAPI(date, done) {
    this.http.postCheckedDay(date, this.selectedCategory, this.calendarWeek, done);
  }

  setCheckboxesForKw(kw) {
    this.clearCheckboxes();
    this.checkedDays.map(day => {
      if (day.kw === kw) {
        if (new Date(day.date).getUTCDay() === 0) { this.checkedMo = day.done; }
        if (new Date(day.date).getUTCDay() === 1) { this.checkedDi = day.done; }
        if (new Date(day.date).getUTCDay() === 2) { this.checkedMi = day.done; }
        if (new Date(day.date).getUTCDay() === 3) { this.checkedDo = day.done; }
        if (new Date(day.date).getUTCDay() === 4) { this.checkedFr = day.done; }
        if (new Date(day.date).getUTCDay() === 5) { this.checkedSa = day.done; }
        if (new Date(day.date).getUTCDay() === 6) { this.checkedSo = day.done; }
      }
    });
  }

  clearCheckboxes() {
    this.checkedMo = false;
    this.checkedDi = false;
    this.checkedMi = false;
    this.checkedDo = false;
    this.checkedFr = false;
    this.checkedSa = false;
    this.checkedSo = false;
  }

  openCreatePlanDialog(): void {
    this.dialog.open(CreatePlanDialogComponent);
  }
}
