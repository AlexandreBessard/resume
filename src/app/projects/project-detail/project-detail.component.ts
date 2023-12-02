import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectService} from '../project.service';
import {Observable} from 'rxjs';
import {ProjectModel} from '../project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {

  selectedProject$: Observable<ProjectModel> = this.projectService.selectedProjectAction$;

  constructor(private projectService: ProjectService) {
  }

}
