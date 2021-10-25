import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';


@Injectable()
export class PunitService implements OnDestroy {


  private allCurrencies$: Observable<any[]>;

  private stopPolling = new Subject();

  constructor(private http: HttpClient) {
    this.allCurrencies$ = timer(1, 3000).pipe(
      switchMap(() => http.get<any[]>('http://localhost:8080/api/nutrition')),
      retry(),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling)
    );
  }


  getAllCurrencies(): Observable<any[]> {
    return this.allCurrencies$.pipe(
      tap(() => {
        console.log(new Date().toLocaleTimeString('de', {hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'}));
        console.log('data sent to subscriber');
      })
    );
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
