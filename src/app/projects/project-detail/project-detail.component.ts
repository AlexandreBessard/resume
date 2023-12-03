import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectService} from '../project.service';
import {Observable} from 'rxjs';
import {ProjectModel} from '../project.model';
import {Router} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {

  selectedProject$: Observable<ProjectModel> = this.projectService.selectedProjectAction$;

  constructor(private projectService: ProjectService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  goBackToProject() {
    this.router.navigate(['/projects']);
    this.scrollToTop();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
