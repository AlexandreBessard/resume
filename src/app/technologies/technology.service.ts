import {TechnologyContentModel} from "./technology-content.model";

export class TechnologyService {

  private technologiesContent: TechnologyContentModel[] = [
    new TechnologyContentModel("Java, 17, 11, 8",
      "<section>\n" +
      "      <p>\n" +
      "        Leveraging Java 17's latest features such as pattern matching, sealed classes,\n" +
      "        and record types to build modern and maintainable applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <p>\n" +
      "        Extensive experience with Java 11 for robust and secure applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <p>\n" +
      "        Java 8's lambda expressions and stream API for writing concise,\n" +
      "        expressive, and efficient code, contributing to legacy project migrations.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/java.svg"),

    new TechnologyContentModel("Angular",
      "<section>\n" +
      "      <p>\n" +
      "        Embracing the power of the latest Angular version to create dynamic and scalable\n" +
      "        web applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "        <p>Proficient in leveraging Angular's reactive programming capabilities, including\n" +
      "        RxJS, to build responsive and real-time user interfaces. Implementing observable\n" +
      "        patterns for seamless data flow.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/angular.svg"),
    new TechnologyContentModel("Spring Framework",
      "<section>\n" +
      "      <p>\n" +
      "        Proficient in developing robust and scalable applications using Spring Boot.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <p>\n" +
      "        Extensive experience with Spring MVC for building flexible and maintainable\n" +
      "        web applications.\n" +
      "      </p>\n" +
      "    </section>\n" +
      "\n" +
      "    <section>\n" +
      "      <p>\n" +
      "        Expertise in integrating Spring Data and JPA for seamless data access and\n" +
      "        persistence. Implementing efficient database interactions and query optimization\n" +
      "        for data-driven applications.\n" +
      "      </p>\n" +
      "    </section>",
      "assets/technologies/spring.svg"),
    new TechnologyContentModel("AWS",
      "<section>\n" +
        "      <p>\n" +
        "        Proficient in designing, implementing, and managing cloud infrastructure on AWS.\n" +
        "        Leveraging a wide range of AWS services to build scalable, secure, and highly\n" +
        "        available solutions for diverse application workloads.\n" +
        "      </p>\n" +
        "    </section>",
      "assets/technologies/AWS.svg"),
    new TechnologyContentModel("Kubernetes",
      "<section>\n" +
        "      <p>\n" +
        "        Proficient in designing, deploying, and managing containerized applications using\n" +
        "        Kubernetes. Leveraging container orchestration for efficient scaling, load balancing,\n" +
        "        and automated deployment.\n" +
        "      </p>\n" +
        "    </section>",
      "assets/technologies/kubernetes.svg"),
    new TechnologyContentModel("Terraform",
      "<section>\n" +
        "      <p>\n" +
        "        Proficient in using Terraform for Infrastructure as Code (IaC) to define, deploy,\n" +
        "        and manage infrastructure resources across various cloud providers. Ensuring\n" +
        "        consistency and repeatability in infrastructure provisioning.\n" +
        "      </p>\n" +
        "    </section>",
      "assets/technologies/terraform.svg"),
    new TechnologyContentModel("Version Control with GitLab",
        "Proficient in utilizing GitLab for version control, collaborative development and CI/CD pipelines. Managing source code repositories and ensuring seamless collaboration among development teams.",
        "assets/technologies/gitlab.svg"),

    new TechnologyContentModel("Jenkins",
        "<p>Proficient in configuring and managing Jenkins for continuous integration, enabling " +
        " automated building, testing, and deployment of software projects. Ensuring rapid" +
        " and reliable software delivery.</p>",
        "assets/technologies/jenkins.svg"),

    new TechnologyContentModel("Kafka",
        "<section>\n" +
        "      <p>\n" +
        "        Proficient in utilizing Apache Kafka for building scalable and real-time data\n" +
        "        streaming solutions. Designing and implementing distributed messaging systems to\n" +
        "        handle high-throughput, fault-tolerance, and seamless data integration across\n" +
        "        diverse applications.\n" +
        "      </p>\n" +
        "    </section>",
        "assets/technologies/kafka.svg")

  ];

  getTechnologies(): TechnologyContentModel[] {
    return this.technologiesContent;
  }

}
