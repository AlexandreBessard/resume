import {ExperienceContentModel} from "./experience-content.model";

export class ExperienceService {

  private experiencesContent: ExperienceContentModel[] = [
    new ExperienceContentModel(0,
      "Senior Software Engineer",
      "2023",
      "Mimecast",
      [
        'Developed application',
        'Collaborated with cross-functional teams'
      ],
      "assets/MIME_BIG.svg",
      "Canada",
      "Toronto",
      "assets/countries/canada.svg"
    ),
    new ExperienceContentModel(
      1,
      "Principal Software Developer",
      "2022",
      "National Bank of Canada",
      [
        'Programmer',
        'ActiveViam'
      ],
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/National_Bank_Of_Canada.svg",
      "Canada",
      "Toronto",
      "assets/countries/canada.svg"
    ),
    new ExperienceContentModel(
      3,
      "Analyst Software Programmer",
      "2019 - 2021",
      "Desjardins",
      [],
      "assets/Desjardins.svg",
      "Canada",
      "Montreal",
      "assets/countries/canada.svg"
    )
  ];

  getExperiences(): ExperienceContentModel[] {
    return this.experiencesContent.slice();
  }

  getExperience(id: number) {
    return this.experiencesContent[id];
  }

}
