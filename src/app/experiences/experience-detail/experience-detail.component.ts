import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ExperienceContentModel } from '../experience-content.model';
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Params} from "@angular/router";
import {enableDebugTools} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit, OnDestroy {

/*  @Input()
  experienceContent: ExperienceContentModel;*/

  experienceContent: ExperienceContentModel;
  private paramsSubscription: Subscription | undefined;

  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute) {
    this.experienceContent = new ExperienceContentModel(-1,'', '', '', [], '',
      "", "", "");
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params): void => {
          this.experienceContent = this.experienceService.getExperience(+params['id']);
        }
      );
  }

  protected readonly enableDebugTools = enableDebugTools;

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
