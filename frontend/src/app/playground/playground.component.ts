import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  linien = [
    {punit: 1},
    {punit: 2},
    {punit: 3},
    {punit: 4},
    {punit: 5},
    {punit: 6},
    {punit: 7},
    {punit: 8},
    {punit: 9},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
