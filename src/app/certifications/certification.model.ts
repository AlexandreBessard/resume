 export class CertificationModel {

  constructor(
    public title: string,
    public isExpired = false,
    public image: string,
    public category: string) {
  }

 }
