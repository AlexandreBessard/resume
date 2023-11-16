import { CertificationModel } from './certification.model';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {

  private certifications: CertificationModel[] = [
    new CertificationModel("Verified International Academic Qualifications", false, "assets/certifications/aws_architect.png", "aws")
  ];

  getCertifications(): Observable<CertificationModel[]> {
    return from([this.certifications]);
  }
}
