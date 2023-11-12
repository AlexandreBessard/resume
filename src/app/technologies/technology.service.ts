import {TechnologyContentModel} from "./technology-content.model";

export class TechnologyService {

  private technologiesContent: TechnologyContentModel[] = [
    new TechnologyContentModel("Java",
      "<section>\n" +
      "      <h2>Java 17</h2>\n" +
      "      <p>\n" +
      "        Leveraging Java 17's latest features such as pattern matching, sealed classes,\n" +
      "        and record types to build modern and maintainable applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h2>Java 11</h2>\n" +
      "      <p>\n" +
      "        Extensive experience with Java 11 for robust and secure applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h2>Java 8</h2>\n" +
      "      <p>\n" +
      "        Java 8's lambda expressions and stream API for writing concise,\n" +
      "        expressive, and efficient code, contributing to legacy project migrations.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/java.svg"),

    new TechnologyContentModel("Angular",
      "<section>\n" +
      "      <h2>Angular (Latest Version)</h2>\n" +
      "      <p>\n" +
      "        Embracing the power of the latest Angular version to create dynamic and scalable\n" +
      "        web applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h4>Angular Reactive Programming</h4>\n" +
      "      <p>\n" +
      "        Proficient in leveraging Angular's reactive programming capabilities, including\n" +
      "        RxJS, to build responsive and real-time user interfaces. Implementing observable\n" +
      "        patterns for seamless data flow.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/angular.svg"),
    new TechnologyContentModel("Spring Framework",
      "<section>\n" +
      "      <h2>Spring Boot</h2>\n" +
      "      <p>\n" +
      "        Proficient in developing robust and scalable applications using Spring Boot.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h2>Spring MVC</h2>\n" +
      "      <p>\n" +
      "        Extensive experience with Spring MVC for building flexible and maintainable\n" +
      "        web applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h2>Spring Data and JPA</h2>\n" +
      "      <p>\n" +
      "        Expertise in integrating Spring Data and JPA for seamless data access and\n" +
      "        persistence. Implementing efficient database interactions and query optimization\n" +
      "        for data-driven applications.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/spring.svg"),
    new TechnologyContentModel("AWS",
      "<section>\n" +
      "      <h2>EKS (Elastic Kubernetes Service)</h2>\n" +
      "      <p>\n" +
      "        Hands-on experience with Amazon EKS for deploying, managing, and scaling containerized\n" +
      "        applications using Kubernetes. Utilizing container orchestration for efficient\n" +
      "        container management.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <h2>ECS (Elastic Container Service)</h2>\n" +
      "      <p>\n" +
      "        Expertise in Amazon ECS for running, stopping, and managing Docker containers on a\n" +
      "        cluster. Implementing containerized applications with a highly scalable and\n" +
      "        cost-effective container orchestration service.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/AWS.svg"),
    new TechnologyContentModel("Kubernetes",
      "<section>\n" +
        "      <h2>Container Orchestration with Kubernetes</h2>\n" +
        "      <p>\n" +
        "        Proficient in designing, deploying, and managing containerized applications using\n" +
        "        Kubernetes. Leveraging container orchestration for efficient scaling, load balancing,\n" +
        "        and automated deployment.\n" +
        "      </p>\n" +
        "    </section>",
      "assets/technologies/kubernetes.svg"),
    new TechnologyContentModel("Terraform",
      "    <section>\n" +
        "      <h2>Infrastructure as Code with Terraform</h2>\n" +
        "      <p>\n" +
        "        Proficient in using Terraform for Infrastructure as Code (IaC) to define, deploy,\n" +
        "        and manage infrastructure resources across various cloud providers. Ensuring\n" +
        "        consistency and repeatability in infrastructure provisioning.\n" +
        "      </p>\n" +
        "    </section>",
      "assets/technologies/terraform.svg")
  ];

  getTechnologies(): TechnologyContentModel[] {
    return this.technologiesContent;
  }

}
