 export class CertificationModel {

  constructor(
    public title: string,
    public providedBy: string,
    public isExpired = false,
    public image: string,
    public category: Category) {
  }

 }

 export enum Category {
   AWS = "AWS",
   JAVA = "JAVA",
   OTHER = "OTHER",
   DEVOPS = "DEVOPS",
   SPRING = "SPRING"
 }
