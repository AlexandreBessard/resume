import { Injectable } from '@angular/core';
import { CertificationService } from './certification.service';
import { CertificationModel } from './certification.model';

@Injectable({
  providedIn: 'root',
})
export class CertificationRepository {

  private certifications: CertificationModel[] = [];
  private categories: string[] = [];

  constructor(private certificationService: CertificationService) {
    this.certificationService.getCertifications().subscribe((data: CertificationModel[]) => {
      this.certifications = data;
      this.categories = data
        .map(cert => cert.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
      console.log(this.categories);
    });
  }

  getCertifications(category?: string) {
    return this.certifications.filter(cert => category == undefined || cert.category == category);
  }

  getCategories() {
    return this.categories;
  }

}
