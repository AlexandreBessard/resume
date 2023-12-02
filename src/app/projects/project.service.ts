import {Injectable, OnInit} from '@angular/core';
import {ProjectDetail, ProjectModel} from './project.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: ProjectModel[] = [];

  private selectedProjectSubject: BehaviorSubject<ProjectModel> = new BehaviorSubject<ProjectModel>({detail: undefined});

  selectedProjectAction$: Observable<ProjectModel> = this.selectedProjectSubject.asObservable();

  constructor() {
    this.projects.push(new ProjectModel("1", "Project name 1", "git_url", "imgUrl",
      new ProjectDetail("desc", ["Java", "Angular"])));
  }

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  updateSelectedProject(project: ProjectModel) {
    this.selectedProjectSubject.next(project);
  }

}
