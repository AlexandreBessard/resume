import {Component, OnInit} from '@angular/core';
import {TechnologyContentModel} from "./technology-content.model";
import {TechnologyService} from "./technology.service";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  providers: [TechnologyService]
})
export class TechnologiesComponent implements OnInit {

  technologiesContent: TechnologyContentModel[] = [];

  constructor(private technologyService: TechnologyService) {
  }

  ngOnInit(): void {
    this.technologiesContent = this.technologyService.getTechnologies();
  }
}
