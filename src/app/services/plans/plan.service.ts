import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Plan } from "../../models/plan.model";
import { AuthService } from "../auth/auth.service";


@Injectable({ providedIn: 'root' })
export class PlanService {

  plans: any;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public auth: AuthService) {

    this.getPlans();
  }

  public getPlans() {
    this.auth.user$.subscribe(user => {
      let x = this.afs.collection(`users/${user.uid}/plans`).valueChanges();
      x.subscribe((value: any) => {
        this.plans = value;
      });
    });
  }

  public updateUserData(user: any, plan: any) {
    const planRef: AngularFirestoreDocument<Plan> = this.afs.doc(`users/${user}/plans/${plan}`);
    const data = {
      category: plan,
    }
    return planRef.set(data, { merge: true })

  }
}
