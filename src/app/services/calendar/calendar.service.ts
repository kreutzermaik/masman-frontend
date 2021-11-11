import {Injectable,} from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthService } from "../auth/auth.service";
import DateTimeUtils from "../../utils/DateTimeUtils";


@Injectable({ providedIn: 'root' })
export class CalendarService {

  events: any;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public auth: AuthService) {

  }

  /**
   * get collection of all events per user
   */
  public getEventsCollection() {
    return new Promise(resolve=> {
      this.auth.user$.subscribe(user => {
        let collection = this.afs.collection(`users/${user.uid}/events`).valueChanges();
        this.getEvents(collection).then((events => {
          resolve(events);
        }));
      });
    });
  }

  /**
   * get all events per user
   * @param x
   */
  getEvents(x: any) {
    return new Promise(resolve=> {
      x.subscribe((events: any) => {
        this.events = events;
        resolve(events);
      });
    });
  }

  /**
   * generates Uuid to get an identifier for event objects
   */
  generateUuidv4() {
    // @ts-ignore
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  /**
   * push events to firestore
   * @param user
   * @param event
   * @param date
   */
  public updateCalendarData(user: any, event: string, date: Date) {
    const calendarRef: AngularFirestoreDocument = this.afs.doc(`users/${user}/events/${this.generateUuidv4()}`);

    const data = {
      date: DateTimeUtils.formatDate(date),
      event: event
    }
    calendarRef.set(data, { merge: true }).then(() => window.location.reload());
  }
}
