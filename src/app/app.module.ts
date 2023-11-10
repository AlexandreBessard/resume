import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AboutComponent} from "./main-page/about/about.component";
import {TopSkillsComponent} from "./main-page/top-skills/top-skills.component";
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencesListComponent } from './experiences/experiences-list/experiences-list.component';
import { ExperienceDetailComponent } from './experiences/experience-detail/experience-detail.component';
import {ExperienceService} from "./experiences/experience.service";
import { ExperienceItemComponent } from './experiences/experiences-list/experience-item/experience-item.component';
import { ExperienceStartComponent } from './experiences/experience-start/experience-start.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AboutComponent,
    TopSkillsComponent,
    ExperiencesComponent,
    ExperiencesListComponent,
    ExperienceDetailComponent,
    ExperienceItemComponent,
    ExperienceStartComponent,
    TechnologiesComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
