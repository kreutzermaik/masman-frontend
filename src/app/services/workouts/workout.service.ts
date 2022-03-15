import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth/auth.service";
import {Workout} from "../../models/workout.model";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workouts: any;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public auth: AuthService) {

  }

  /**
   * get collection of all events per user
   */
  public getWorkoutsCollection() {
    return new Promise(resolve=> {
      this.auth.user$.subscribe(user => {
        let collection = this.afs.collection(`users/${user.uid}/workouts`).valueChanges();
        this.getWorkouts(collection).then((events => {
          resolve(events);
        }));
      });
    });
  }

  /**
   * get all events per user
   * @param x
   */
  getWorkouts(collection: any) {
    return new Promise(resolve=> {
      collection.subscribe((workouts: any) => {
        this.workouts = workouts;
        resolve(workouts);
      });
    });
  }

  /**
   * get workout for workoutId
   * @param workoutId
   */
  getWorkout(workoutId: string) {
    return new Promise(resolve=> {
      this.auth.user$.subscribe(user => {
        let doc = this.afs.collection(`users/${user.uid}/workouts`).doc(`${workoutId}`).valueChanges();
        resolve(doc)
      });
    });
  }

  getAllWorkouts(userId: string, workoutId: string) {
    return (this.afs.doc(`users/${userId}/workouts/${workoutId}`)).get();
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
  public updateWorkoutData(user: any, workout: Workout) {
    workout.id = this.generateUuidv4();

    if(workout.name == undefined) workout.name = '';
    else if (workout.exercise1 == undefined) workout.exercise1 = '';
    else if (workout.exercise2 == undefined) workout.exercise2 = '';
    else if (workout.exercise3 == undefined) workout.exercise3 = '';
    else if (workout.exercise4 == undefined) workout.exercise4 = '';

    const calendarRef: AngularFirestoreDocument = this.afs.doc(`users/${user}/workouts/${workout.id}`);
    calendarRef.set(workout, { merge: true }).then();
  }
}
