import { Component, OnInit, Input } from '@angular/core';

import { Application } from './../../Application';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <app-preview *ngFor="let application of applications" [application]="application">
      </app-preview>
    </ul>
  `,
  styles: []
})
export class AppListComponent implements OnInit {
  @Input() applications: Application[]
  constructor() { }

  ngOnInit() {
  }

}
