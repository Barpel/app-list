import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-nav',
  template: `
    <nav class="home-nav">
      <ul>
        <li>
          <a routerLink="/">
          Home
        </a>
        </li>
        <li>
          <a routerLink="/about">
            About
          </a>
          </li>
        <li>
          <a routerLink="/app">
            Applications
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./home-nav.scss']
})
export class HomeNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
