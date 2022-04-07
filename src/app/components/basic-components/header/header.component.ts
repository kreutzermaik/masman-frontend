import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit(): void {}

  navigateToUrl(url: string) {
    if(url === 'logout') {
      this.auth.signOut().then(() => {
        this.router.navigateByUrl('/login').then()
      });
    }
    this.router.navigateByUrl(url).then();
  }
}
