import {Component, HostBinding, Input} from '@angular/core';
import {ExperienceContentModel} from "../../experience-content.model";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input()
  experienceContent: ExperienceContentModel;

  @Input()
  index: number = 0;

  // Use @HostBinding to dynamically add a class for styling
  @HostBinding('class.hovered')
  hovered: boolean = false;

  constructor() {
    this.experienceContent = new ExperienceContentModel(0,'', '', '', [], '',
      "", "", "");
  }

  protected readonly onmouseleave = onmouseleave;

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }

}
