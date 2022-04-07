import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AuthService} from "./auth.service";
import {Goal} from "../models/goal.model";

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goals: any;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public auth: AuthService) {

  }

  /**
   * get all goals for user
   * @param userId
   */
  getAllGoals(userId: string) {
    return this.afs.collection(`users/${userId}/goals`).valueChanges();
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
  public updateGoalData(user: any, goal: Goal) {
    goal.id = this.generateUuidv4();

    const calendarRef: AngularFirestoreDocument = this.afs.doc(`users/${user}/goals/${goal.name}`);
    calendarRef.set(goal, { merge: true }).then();
  }
}
