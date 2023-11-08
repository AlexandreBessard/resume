import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperiencesComponent} from "./experiences/experiences.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: "about", component: MainPageComponent },
  { path: "experiences", component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
