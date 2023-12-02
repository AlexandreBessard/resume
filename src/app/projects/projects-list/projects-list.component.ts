import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ProjectDetail, ProjectModel} from '../project.model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent implements OnInit {

  projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService,
              private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  detailProjectSelected(project: ProjectModel) {
    this.projectService.updateSelectedProject(project);
    this.router.navigate(['/project/details']);
  }


}
