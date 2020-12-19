import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  constructor() { }

  ngOnInit(): void {
  }

}
