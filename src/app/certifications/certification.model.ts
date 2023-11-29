 export class CertificationModel {

  constructor(
    public title: string,
    public providedBy: string,
    public isExpired = false,
    public image: string,
    public category: Category,
    public description: string,
    public url: string) {
  }

 }

 export enum Category {
   AWS = "AWS",
   JAVA = "JAVA",
   OTHER = "OTHER",
   DEVOPS = "DEVOPS",
   SPRING = "SPRING",
   ALL = "All"
 }
