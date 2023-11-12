import {TechnologyContentModel} from "./technology-content.model";

export class TechnologyService {

  private technologiesContent: TechnologyContentModel[] = [
    new TechnologyContentModel("Java",
      "<p style='color: red;'>Java SE</p>",
      "assets/technologies/javaLogo.svg"),
    new TechnologyContentModel("Spring Framework",
      "Java",
      "url image"),
    new TechnologyContentModel("Spring Framework",
      "Java",
      "url image"),
    new TechnologyContentModel("Spring Framework",
      "Java",
      "url image"),
    new TechnologyContentModel("Spring Framework",
      "Java",
      "url image"),
    new TechnologyContentModel("Spring Framework",
      "Java",
      "url image")
  ];

  getTechnologies(): TechnologyContentModel[] {
    return this.technologiesContent;
  }

}
