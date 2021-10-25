import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleLoginComponent} from '../auth/google-login/google-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;
  currentUser;

  constructor(public router: Router) { }

  async ngOnInit(): Promise<void> {
    this.currentUser = await GoogleLoginComponent.getCurrentUser();
    if (this.currentUser) {
      this.isLoggedIn = true;
    }
  }

  async logout(): Promise<void> {
    this.isLoggedIn = false;
    await GoogleLoginComponent.logout();
    this.navigateToLogin();
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  navigateToOverview(): void {
    this.router.navigateByUrl('/übersicht');
  }

}
