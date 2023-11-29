import {Category, CertificationModel} from './certification.model';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {

  private certifications: CertificationModel[] = [
    { title: "Verified International Academic Qualifications",
      providedBy: "World Education Services",
      isExpired: false,
      image: "assets/certifications/wes.png",
      category: Category.OTHER,
      description: "Verifies the authenticity of the claimed credential. Provides assurance that the awarding institution and/or program was accredited at the point that the credential was issued Indicates that the associated credential has been assessed for its Canadian equivalency.",
      url: "https://www.credly.com/badges/c00e7898-5cef-4699-b4f9-dd28fa302144"
    },
    { title: "AWS Certified Solutions Architect - Associate",
      providedBy: "Amazon Web Services",
      isExpired: false,
      image: "assets/certifications/aws_architect.png",
      category: Category.AWS,
      description: "Certification earners possess a comprehensive grasp of AWS services and technologies. They showcase the capability to construct secure and robust solutions, applying architectural design principles aligned with customer requirements. Badge holders excel in strategically designing well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
      url: "https://www.credly.com/badges/8540be96-adfa-43aa-b59f-ee5e64702641"
    },
    { title: "AWS Certified Developer - Associate",
      providedBy: "Amazon Web Services",
      isExpired: true,
      image: "assets/certifications/aws_developer.png",
      category: Category.AWS,
      description: "",
      url: "https://www.credly.com/badges/c49a5400-2cf4-4905-a7b7-0f45a0d73ce8"
    },
    { title: "Oracle Certified Associate, Java SE 8 Programmer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_8_associate.png",
      category: Category.JAVA,
      description: "",
      url: "https://www.credly.com/badges/51991059-4b03-4188-b198-5ff9b260379a"
    },
    { title: "Hashicorp Certified: Terraform Associate (002)",
      providedBy: "HashiCorp",
      isExpired: false,
      image: "assets/certifications/terraform.png",
      category: Category.OTHER,
      description: "",
      url: "https://www.credly.com/badges/d8b2db0d-d19e-436f-b724-6f4b82cecc18"
    },
    { title: "CKAD: Certified Kubernetes Application Developer",
      providedBy: "The Linux Foundation",
      isExpired: false,
      image: "assets/certifications/kubernetes.png",
      category: Category.OTHER,
      description: "",
      url: "https://www.credly.com/badges/00575811-d7c1-4005-a1a9-bf72a08ed25e"
    },
    { title: "Oracle Certified Professional, Java SE 8 Programmer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_8_pro.png",
      category: Category.JAVA,
      description: "",
      url: "https://www.credly.com/badges/b91dcf21-ad84-46e7-87fd-bf360854de6b"
    },
    { title: "Oracle Certified Professional: Java SE 11 Developer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_11_pro.png",
      category: Category.JAVA,
      description: "",
      url: "https://www.credly.com/badges/858cb86b-9094-45ff-9739-eab43e0517fd"
    },
    { title: "VMware Spring Professional 2021",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/spring_framework.png",
      category: Category.OTHER,
      description: "",
      url: "https://www.credly.com/badges/a492a8ec-d5ef-4569-b81c-31c324cdc475"
    }
  ];

  getCertifications(): Observable<CertificationModel[]> {
    return from([this.certifications]);
  }

  test() {
    return this.certifications;
  }
}
