import {Component, Input} from '@angular/core';
import {ExperienceContentModel} from "../../experience-content.model";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input()
  experienceContent: ExperienceContentModel;

  constructor() {
    this.experienceContent = new ExperienceContentModel('', '', '', [], '');
  }

}
