import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperiencesComponent} from "./experiences/experiences.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ExperienceStartComponent} from "./experiences/experience-start/experience-start.component";
import {ExperienceDetailComponent} from "./experiences/experience-detail/experience-detail.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {CertificationsComponent} from "./certifications/certifications.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: "about", component: MainPageComponent },
  { path: "experiences", component: ExperiencesComponent, children: [
      { path: '', component: ExperienceStartComponent },
      { path: ':id', component: ExperienceDetailComponent }
    ] },
  { path: 'projects', component: ProjectsComponent },

  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'project/details', component: ProjectDetailComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },

  //{ path: '', pathMatch: 'full', redirectTo: '/about'},
  { path: '**', redirectTo: "/about"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
