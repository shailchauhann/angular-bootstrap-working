import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { Home2Component } from './pages/home2/home2.component';
import { HovercardComponent } from './pages/hovercard/hovercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    TimelineComponent,
    Home2Component,
    HovercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
