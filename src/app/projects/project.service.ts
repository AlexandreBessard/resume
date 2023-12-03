import {Injectable, OnInit} from '@angular/core';
import {ProjectDetail, ProjectModel} from './project.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProjectsContent} from './projects.content';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: ProjectModel[] = [];

  private selectedProjectSubject: BehaviorSubject<ProjectModel> = new BehaviorSubject<ProjectModel>(
    {
      id: "",
      name: "",
      gitUrl: "",
      image: "",
      githubUrlHosted: "",
      detail: new ProjectDetail("", [], "")});

  selectedProjectAction$: Observable<ProjectModel> = this.selectedProjectSubject.asObservable();

  constructor() {
    this.projects = ProjectsContent.projectsContent;
  }

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  updateSelectedProject(project: ProjectModel) {
    this.selectedProjectSubject.next(project);
  }

}
