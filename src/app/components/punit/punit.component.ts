import { Component, OnInit } from '@angular/core';
import { PunitService } from '../../services/punit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-punit',
  templateUrl: './punit.component.html',
  styleUrls: ['./punit.component.css']
})
export class PunitComponent implements OnInit {


  currencyInfo$: Observable<any[]>;

  constructor(public currencyService: PunitService) {
    this.currencyInfo$ = currencyService.getAllCurrencies();
  }

  ngOnInit(): void {
  }

}
