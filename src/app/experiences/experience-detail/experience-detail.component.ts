import {Component, Input, OnInit} from '@angular/core';
import { ExperienceContentModel } from '../experience-content.model';
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

/*  @Input()
  experienceContent: ExperienceContentModel;*/

  experienceContent: ExperienceContentModel;

  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute) {
    this.experienceContent = new ExperienceContentModel(-1,'', '', '', [], '');
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params): void => {
          this.experienceContent = this.experienceService.getExperience(+params['id']);
        }
      );
  }

}
