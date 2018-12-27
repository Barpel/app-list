import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './cmps/home-nav/home-nav.component';
import { ApplicationPage } from './pages/application-page/application-page.component';
import { AppListComponent } from './cmps/applist/applist.component';
import { AppPreviewComponent } from './cmps/app-preview/app-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    ApplicationPage,
    AppListComponent,
    AppPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
