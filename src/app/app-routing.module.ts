import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Home2Component } from './pages/home2/home2.component';
import { HovercardComponent } from './pages/hovercard/hovercard.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'home2',component: Home2Component},
  {path:'projects',component: ProjectsComponent},
  {path:'hovercard',component: HovercardComponent},
  {path:'',redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
