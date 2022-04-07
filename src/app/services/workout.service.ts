import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AuthService} from "./auth.service";
import {Workout} from "../models/workout.model";
import DateTimeUtils from "../utils/DateTimeUtils";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  workouts: any;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, public auth: AuthService) {}

  /**
   * get workout for user and workoutId
   * @param userId
   * @param workoutId
   */
  getWorkout(workoutId: string) {
    return this.afs.collection(`workouts`).doc(`${workoutId}`).valueChanges();
  }

  /**
   * get all workouts for user
   * @param userId
   */
  getAllWorkouts() {
    return this.afs.collection(`workouts`).valueChanges();
  }

  /**
   * push workout to firestore
   * @param name
   * @param category
   * @param exercises
   */
  public updateWorkoutData(name: any, category: any, exercises: any) {
    const workout = {
      name: name,
      category: category,
      exercises: exercises,
    }
    const workoutRef: AngularFirestoreDocument = this.afs.doc(`workouts/${workout.name}`);
    workoutRef.set(workout, { merge: true }).then(() => window.location.reload());
  }
}
