import { Injectable } from '@angular/core';
import {ProjectDetail, ProjectModel} from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: ProjectModel[] = [];

  constructor() {
    const project1 = new ProjectModel("1", "project name", new ProjectDetail("description"));
    this.projects.push(project1);
  }




}
