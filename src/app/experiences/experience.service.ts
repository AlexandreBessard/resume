import {ExperienceContentModel} from "./experience-content.model";

export class ExperienceService {

  private experiencesContent: ExperienceContentModel[] = [
    new ExperienceContentModel(
      "Senior Software Engineer",
      "2023",
      "Mimecast",
      [
        'Developed application',
        'Collaborated with cross-functional teams'
      ],
      "url_img"
    ),
    new ExperienceContentModel(
      "Principal Software Developer",
      "2022",
      "National Bank of Canada",
      [
        'Programmer',
        'ActiveViam'
      ],
      "url_img"
    )
  ];

  getExperiences(): ExperienceContentModel[] {
    return this.experiencesContent.slice();
  }

}
