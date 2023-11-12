import {Component, Input} from '@angular/core';
import {TechnologyContentModel} from "../technology-content.model";

@Component({
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.css']
})
export class TechnologyItemComponent {

  @Input()
  technologyContent: TechnologyContentModel;

  constructor() {
    this.technologyContent = new TechnologyContentModel("", "", "");
  }

}
