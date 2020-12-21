import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = ['home', 'übersicht', 'workouts'];
  activeLink = this.links[0];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  home(link): void {
    let url = "/" + link;
    this.router.navigateByUrl(url);
  }

}
