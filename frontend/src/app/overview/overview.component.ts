import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  exercises: string;
  date: string;
  selectedExercise: string;
  exercise: string;
  result: string;
  records: MatTableDataSource<any>;
  exerciseId: 0;
  displayedColumns: string[] = ['date', 'name', 'result'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public http: HttpRequestService) {
    this.http.getRecords().subscribe(data => {
      this.records = new MatTableDataSource(data);
      this.records.paginator = this.paginator;
      this.records.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.http.getExercises().subscribe(data => {
      this.exercises = data;
    });
  }

  addRecord(): void {
    this.http.postRecords(this.date, this.selectedExercise, this.result, this.exerciseId);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records.filter = filterValue.trim().toLowerCase();

    if (this.records.paginator) {
      this.records.paginator.firstPage();
    }
  }

}

