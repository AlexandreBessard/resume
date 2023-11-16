import { Component } from '@angular/core';
import {CertificationService} from './certification.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  constructor(private certificationService: CertificationService) {}

  get certifications() {
    return this.certificationService.getCertifications();
  }

}
