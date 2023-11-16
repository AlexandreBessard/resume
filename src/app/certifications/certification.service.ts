import { CertificationModel } from './certification.model';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {

  private certifications: CertificationModel[] = [
    { title: "Verified International Academic Qualifications",
      isExpired: false,
      image: "assets/certifications/aws_architect.png",
      category: "aws"
    },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "aws" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: true, image: "image_url", category: "aws" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "java" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "java" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "java" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "other" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "other" },
    { title: "AWS Certified Solutions Architect - Associate", isExpired: false, image: "image_url", category: "other" }
  ];

  getCertifications(): Observable<CertificationModel[]> {
    return from([this.certifications]);
  }

  test() {
    return this.certifications;
  }
}
