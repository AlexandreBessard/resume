import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperiencesComponent} from "./experiences/experiences.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ExperienceStartComponent} from "./experiences/experience-start/experience-start.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: "about", component: MainPageComponent },
  { path: "experiences", component: ExperiencesComponent, children: [
      { path: '', component: ExperienceStartComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
