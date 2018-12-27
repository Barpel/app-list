import { Component, OnInit, Input } from '@angular/core';

import { Application } from './../../Application';

@Component({
  selector: 'app-preview',
  template: `
  <div class="application">
    <h3>
      {{application.name}}
    </h3>
    <img [src]="application.img" [alt]="application.name"/>
    <a [href]="application.url">Go To App</a>
  </div>
    
  `,
  styles: []
})
export class AppPreviewComponent implements OnInit {
  @Input() application: Application
  constructor() { }

  ngOnInit() {
  }

}
