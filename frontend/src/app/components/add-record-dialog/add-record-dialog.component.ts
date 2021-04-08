import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../services/http-service/http-request.service';
import { TokenStorageService } from '../../services/token-storage-service/token-storage.service';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './add-record-dialog.component.html',
  styleUrls: ['./add-record-dialog.component.scss']
})
export class AddRecordDialogComponent implements OnInit {

  exercises: string;
  date: string;
  selectedExercise: string;
  result: string;
  username: string;
  isLoggedIn = false;

  // Validators
  dateFormControl = new FormControl('', [
    Validators.required,
  ]);

  exerciseFormControl = new FormControl('', [
    Validators.required,
  ]);

  valueFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public http: HttpRequestService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }

    this.http.getExercises().subscribe(data => {
      this.exercises = data;
    });
  }

  formatDate(): string {
    const date = new Date(this.date);
    let day;
    let month;
    if (date.getDate() < 10) {
      day = '0' + date.getDate();
    }
    else {
      day = date.getDate();
    }
    if (date.getMonth() < 10) {
      month = '0' + (date.getMonth() + 1);
    }
    else {
      month = (date.getMonth() + 1);
    }
    return day + '.' + (month) + '.' + date.getFullYear();
  }

  addRecord(): void {
    const date = this.formatDate();
    console.log(this.username);
    this.http.postRecords(date, this.selectedExercise, this.result, 0, this.username);
  }

}
