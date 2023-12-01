import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {ProjectDetail, ProjectModel} from '../project.model';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {

  projects: ProjectModel[] = [];

  constructor() {
    this.projects.push(new ProjectModel("1", "Project name 1",
      new ProjectDetail("desc")));
  }

}
