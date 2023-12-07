import {ExperienceContentModel} from "./experience-content.model";

export class ExperienceService {

  private experiencesContent: ExperienceContentModel[] = [
    new ExperienceContentModel(0,
      "Senior Software Engineer",
      "2023",
      "Mimecast",
      [
        { key: 'Establishing Coding Standards:', value: 'Guided the team in creating and upholding coding standards, ensuring alignment with company-wide technology adoptions to maintain code consistency.' },
        { key: 'Feature Design Collaboration:', value: 'Collaborated with architects to design and implement new features or enhancements, fostering a cooperative approach to development.' },
        { key: 'Team Coaching and Mentorship:', value: 'Coached and mentored team members, nurturing their skills and fostering adherence to project design principles for enhanced collective performance.' },
        { key: 'API/REST Design Guidance:', value: 'Actively participated in the API Guild, providing valuable guidance to other teams on proper API/REST design and best practices, contributing to a cohesive and standardized development approach.' }
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
        { key: 'Crafted Innovative Solutions:', value: 'Engineered and implemented novel features and functionalities within existing applications, aligning closely with business requirements to enhance overall system capabilities.' },
        { key: 'Ensured Software Reliability:', value: 'Collaborated closely with QA teams to define comprehensive test cases, ensuring the robustness, reliability, and integrity of software solutions.' },
        { key: 'Architectural Contribution:', value: 'Played an active role in architectural discussions, offering valuable insights and contributing to informed system design decisions.' },
        { key: 'Efficient Issue Resolution:', value: 'Investigated and adeptly resolved intricate software issues and bugs reported by end-users or discovered during rigorous testing phases.' },
        { key: 'Comprehensive Documentation:', value: 'Developed and maintained meticulous technical documentation for software solutions and delivered insightful presentations to stakeholders.' },
        { key: 'Effective Communication:', value: 'Fostered transparent communication within the team, project managers, and stakeholders. Regularly provided project updates and promptly addressed any concerns or issues.' },
        { key: 'Agile Development Collaboration:', value: 'Thrived in an Agile development environment, actively participating in sprint planning, daily stand-ups, and retrospectives to ensure smooth project progression.' },
        { key: 'Continuous Improvement Advocate:', value: 'Identified areas for process enhancement and contributed significantly to the continuous improvement of development practices, fostering an environment of growth and efficiency.' }
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
      [
        { key: 'Advanced Software Development:', value: 'Developed applications, programs, or computer tools of medium to high complexity, meticulously conducting necessary tests, and implementing fixes.' },
        { key: 'Database Optimization:', value: 'Ensured and executed the update of various databases, proactively recommending improvements to optimize their quality and efficiency.' },
        { key: 'System Analysis Expertise:', value: 'Analyzed system components, functional and non-functional specifications, change requests, and resolved technical issues encountered.' },
        { key: 'Complex Problem Resolution:', value: 'Ensured the resolution of technically complex problems, recommended the evolution of work methods and procedures from a technical perspective, and actively participated in their development to optimize their quality and efficiency.' }
      ],
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
      [
        { key: 'Strategic Testing Plans:', value: 'Developed and documented comprehensive software testing plans, contributing to the creation of innovative concepts and applications as an integral part of an automation team.' },
        { key: 'Automation Solution Development:', value: 'Played a key role in developing automation solutions, starting from prototypes of new functionality and technologies to seamlessly integrating them into the company\'s overarching products and offerings.' },
        { key: 'Efficient Automation Delivery:', value: 'Successfully delivered automation solutions, ensuring the smooth and uninterrupted operation of applications and components through collaboration with the testing team.' },
        { key: 'Defect Monitoring and Correction:', value: 'Proactively monitored and rectified any defects or performance issues detected during testing, maintaining a high standard of software quality.' },
        { key: 'Holistic Solution Development:', value: 'Actively participated in the development of end-to-end solutions, encompassing design, coding, application maintenance, and testing, adhering to managerial instructions.' },
        { key: 'Timely and Quality Code Delivery:', value: 'Wrote and provided code according to defined timelines and quality expectations, contributing to the overall success of the projects.' }
      ],
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
