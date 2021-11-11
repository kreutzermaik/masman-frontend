import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    await this.auth.googleSignin();
    await this.router.navigateByUrl('/overview');
  }

}
