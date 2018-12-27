import { Component, OnInit } from '@angular/core';

import { Application } from './../../Application';
import { AppService } from './../../services/app-service.service';
// import { AppListComponent } from './../../cmps/applist/applist.component';

@Component({
  selector: 'application-page',
  template: `
    <h1>Applications Page</h1>
    <div>
      <app-list [applications]="applications"></app-list>
    </div>
  `,
  styleUrls: []
})
export class ApplicationPage implements OnInit {
  
  applications: Application[]

  getApps(): void {
    this.applications = this.appService.getApps()
  } 

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getApps()
  }

}
