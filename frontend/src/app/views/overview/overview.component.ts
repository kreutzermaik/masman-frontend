import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-service/http-request.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddRecordDialogComponent} from '../../components/add-record-dialog/add-record-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  records: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'name', 'result'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public http: HttpRequestService, public dialog: MatDialog) {
    this.http.getRecords().subscribe(data => {
      this.records = new MatTableDataSource(data);
      this.records.paginator = this.paginator;
      this.records.sort = this.sort;
    }, error => console.log('ERROR'));
  }

  ngOnInit(): void {
  }

  addRecordDialog(): void {
    const dialogRef = this.dialog.open(AddRecordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records.filter = filterValue.trim().toLowerCase();

    if (this.records.paginator) {
      this.records.paginator.firstPage();
    }
  }

}

