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
      category: Category.OTHER
    },
    { title: "AWS Certified Solutions Architect - Associate",
      providedBy: "Amazon Web Services",
      isExpired: false,
      image: "assets/certifications/aws_architect.png",
      category: Category.AWS
    },
    { title: "AWS Certified Developer - Associate",
      providedBy: "Amazon Web Services",
      isExpired: true,
      image: "assets/certifications/aws_developer.png",
      category: Category.AWS
    },
    { title: "Oracle Certified Associate, Java SE 8 Programmer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_8_associate.png",
      category: Category.JAVA
    },
    { title: "Hashicorp Certified: Terraform Associate (002)",
      providedBy: "HashiCorp",
      isExpired: false,
      image: "assets/certifications/terraform.png",
      category: Category.OTHER
    },
    { title: "CKAD: Certified Kubernetes Application Developer",
      providedBy: "The Linux Foundation",
      isExpired: false,
      image: "assets/certifications/kubernetes.png",
      category: Category.OTHER
    },
    { title: "Oracle Certified Professional, Java SE 8 Programmer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_8_pro.png",
      category: Category.JAVA
    },
    { title: "Oracle Certified Professional: Java SE 11 Developer",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/java_11_pro.png",
      category: Category.JAVA
    },
    { title: "VMware Spring Professional 2021",
      providedBy: "Oracle",
      isExpired: false,
      image: "assets/certifications/spring_framework.png",
      category: Category.OTHER
    }
  ];

  getCertifications(): Observable<CertificationModel[]> {
    return from([this.certifications]);
  }

  test() {
    return this.certifications;
  }
}
