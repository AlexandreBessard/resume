import { Injectable } from '@angular/core';
import { CertificationService } from './certification.service';
import { CertificationModel } from './certification.model';

@Injectable({
  providedIn: 'root',
})
export class CertificationRepository {

  private certifications: CertificationModel[] = [];

  constructor(private certificationService: CertificationService) {
    certificationService.getCertifications().subscribe((data: CertificationModel[]) => {
      this.certifications = data;
    });
  }

  getCertifications() {
    return this.certifications.entries().next().value;
  }

}
