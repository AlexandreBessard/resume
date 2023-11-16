import { Component } from '@angular/core';
import {CertificationRepository} from './certification.repository';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  selectedCategory: string | undefined;

  constructor(private certificationRepository: CertificationRepository) {}

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  get certifications() {
    return this.certificationRepository.getCertifications(this.selectedCategory);
  }

  get categories() {
    return this.certificationRepository.getCategories();
  }

}
