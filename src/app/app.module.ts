import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AboutComponent} from "./main-page/about/about.component";
import {TopSkillsComponent} from "./main-page/top-skills/top-skills.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AboutComponent,
    TopSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
