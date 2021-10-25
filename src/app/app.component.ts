import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleLoginComponent} from './components/auth/google-login/google-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'masman';

  constructor(private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    if (await GoogleLoginComponent.checkIfUserAuthenticated()) {
      await this.router.navigateByUrl('/übersicht');
    } else {
      await this.router.navigateByUrl('/login');
    }
  }
}
