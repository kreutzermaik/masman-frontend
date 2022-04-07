import { Component, OnInit } from '@angular/core';
import {GoalService} from "../../../services/goal.service";
import {AuthService} from "../../../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Goal} from "../../../models/goal.model";
import DateTimeUtils from "../../../utils/DateTimeUtils";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: any;
  counterBlue: any = null;
  counterWhite: any = null;
  counterOrange: any = null;
  user: any;

  constructor(private goalService: GoalService, public auth: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.goals = this.goalService.getAllGoals(user.uid);

      this.goals.subscribe((goal: any) => {
        this.counterBlue = Number(goal[0].value);
        this.counterOrange = Number(goal[1].value);
        this.counterWhite = Number(goal[2].value);
      })
    });
  }

  countBlue(vz: string) {
    (vz === '+') ? this.counterBlue++ : this.counterBlue--;
    this.updateGoal(this.counterBlue, "Blau");
  }

  countWhite(vz: string) {
    (vz === '+') ? this.counterWhite++ : this.counterWhite--;
    this.updateGoal(this.counterWhite, "Weiß");
  }

  countOrange(vz: string) {
    (vz === '+') ? this.counterOrange++ : this.counterOrange--;
    this.updateGoal(this.counterOrange, "Orange");
  }

  updateGoal(counter: number, color: string) {
    let goal: Goal;
    goal = {
      date: DateTimeUtils.formatDate(new Date()),
      value: counter,
      name: color
    };

    this.afAuth.user.subscribe(user => {
      this.user = user?.uid;
      this.goalService.updateGoalData(user?.uid, goal);
    });
  }


}
