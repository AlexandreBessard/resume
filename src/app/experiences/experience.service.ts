import {ExperienceContentModel} from "./experience-content.model";

export class ExperienceService {

  private experiencesContent: ExperienceContentModel[] = [
    new ExperienceContentModel(0,
      "Senior Software Engineer",
      "2023",
      "Mimecast",
      [
        "Created and enforced coding standards within the team and ensuring consistency with company-wide technology adoptions.",
        "Designed new features or enhancements with the collaboration of architects.",
        "Leaded backlog grooming, planning, design reviews, and code reviews.",
        "Coached and mentored team members to develop their skills and ensure adherence to project design.",
        "Provided guidance to other teams on proper API/REST design and practices, as an active participant of the API Guild."
      ],
      "assets/MIME_BIG.svg",
      "Canada",
      "Toronto",
      "assets/countries/canada.svg",
      ['Spring Boot', 'Docker', 'Gitlab', 'Terraform', 'LocalStack', 'AWS', 'Java', 'Jenkins']
    ),
    new ExperienceContentModel(
      1,
      "Senior Developer",
      "2022",
      "National Bank of Canada",
      [
        'Implemented new features and functionalities in existing applications to meet business needs.',
        'Collaborated with QA teams to define test cases and ensure the reliability and integrity of software solutions.',
        'Participated in architectural discussions and provided input on system design decisions.',
        'Investigated and resolved complex software issues and bugs reported by end-users or identified during testing phases.',
        'Created and maintained technical documentation for software solutions and presentations.',
        'Communicated effectively with team members, project managers, and stakeholders to provide project updates and address any issues or concerns.',
        'Worked within an Agile development environment, participating in sprint planning, daily stand-ups, and retrospectives.',
        'Identified areas for process improvement and contribute to the continuous improvement of development practices.'
      ],
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/National_Bank_Of_Canada.svg",
      "Canada",
      "Toronto",
      "assets/countries/canada.svg",
      ['Docker', 'Spring Boot', 'Bitbucket', 'Terraform', 'Angular', 'AWS', 'Kubernetes',
        'Splunk', 'Java', 'Maven', 'Jenkins']
    ),
    new ExperienceContentModel(
      3,
      "Analyst Software Programmer",
      "2019 - 2021",
      "Desjardins",
      ["Developed applications, programs, or computer tools of medium to high complexity and perform the necessary tests and fixes.",
        "Ensured and carry out the update of various databases and recommend any improvements aimed at optimizing their quality and efficiency.",
        "Analyzed system components, functional and non-functional specifications, change requests, or technical issues encountered.",
        "Ensured the resolution of technically complex problems, recommend the evolution of work methods and procedures from a technical perspective, and participate in their development to optimize their quality and efficiency."],
      "assets/Desjardins.svg",
      "Canada",
      "Montreal",
      "assets/countries/canada.svg",
      ['Object-Oriented Programming (OOP)', 'Toad', 'Bitbucket', 'Struts', 'Java', 'Spring MVC', 'Mockito']
    ),
    new ExperienceContentModel(4,
      "Developer",
      "2018",
      "Accenture",
      ["Developed and documented software testing plans, to develop innovative concepts and applications, working in an automation team.",
        "Participated in the development of automation solutions, from prototypes of new functionality and technologies to their integration into the general products and offers of the company",
        "Delivered automation solutions; to ensure smooth and uninterrupted operation of applications and components in cooperation with the testing team",
        "Monitored and correct any defects or performance issues detected during testing",
        "Involved in the development of the solution to perform design, coding, application maintenance and testing works according to the manager's instructions",
        "Wrote and provided code according to time and quality expectations"],
      "assets/companies/accenture.svg",
      "France",
      "Paris",
      "assets/countries/france.svg",
      ['Cloud Computing', 'GitHub', 'Object-Oriented Programming (OOP)',
      'Oracle Database', 'Ansible', 'Gitlab', 'Shell Scripting', 'Amazon Web Services (AWS)',
      'IntelliJ IDEA', 'Java', 'Spring Framework', 'Maven', 'Bootstrap', 'Linux', 'Jenkins'])
  ];

  getExperiences(): ExperienceContentModel[] {
    return this.experiencesContent.slice();
  }

  getExperience(id: number) {
    return this.experiencesContent[id];
  }

}
