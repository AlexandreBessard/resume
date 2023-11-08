import {Component, OnInit} from '@angular/core';
import {ExperienceContentModel} from "../experience-content.model";
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css']
})
export class ExperiencesListComponent implements OnInit {

  experiencesContent: ExperienceContentModel[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiencesContent = this.experienceService.getExperiences();
  }

}
