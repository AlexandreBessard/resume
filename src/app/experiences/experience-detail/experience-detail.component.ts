import { Component, Input } from '@angular/core';
import { ExperienceContentModel } from '../experience-content.model';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent {

  @Input() experienceContent: ExperienceContentModel;
  constructor() {
    this.experienceContent = new ExperienceContentModel('', '', '', [], '');
  }
}
