import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationPage } from './pages/application-page/application-page.component';

const routes: Routes = [
  {path: 'app', component: ApplicationPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
