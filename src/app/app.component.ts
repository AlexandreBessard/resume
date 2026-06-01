import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Lang = 'fr' | 'en';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  highlights: string[];
  stack: string;
}

interface SkillGroup {
  label: string;
  items: string;
}

interface Education {
  title: string;
  school: string;
  period: string;
}

interface Ui {
  download: string;
  profile: string;
  experience: string;
  education: string;
  skills: string;
  certifications: string;
  stack: string;
  footer: string;
}

interface Content {
  title: string;
  subtitle: string;
  availability: string[];
  profile: string;
  skills: SkillGroup[];
  certifications: string[];
  experiences: Experience[];
  educations: Education[];
  ui: Ui;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly resumePdf = 'assets/resume/CV_Alexandre_Bessard_2026.pdf';
  readonly name = 'Alexandre Bessard';

  lang: Lang = 'fr';

  setLang(lang: Lang): void {
    this.lang = lang;
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  get c(): Content {
    return this.content[this.lang];
  }

  readonly contacts = [
    { label: 'lexoft.eurl@gmail.com', href: 'mailto:lexoft.eurl@gmail.com' },
    { label: '+33 6 34 49 12 75', href: 'tel:+33634491275' },
    { label: 'Orléans (45), France', href: null },
    { label: 'linkedin.com/in/alexandrebessard', href: 'https://linkedin.com/in/alexandrebessard' },
    { label: 'lexoft-eurl.com', href: 'https://lexoft-eurl.com' },
  ];

  readonly content: Record<Lang, Content> = {
    fr: {
      title: 'Architecte & Ingénieur Cloud Senior',
      subtitle: 'AWS · DevOps · Java / Angular · IAM',
      availability: [
        'Disponible immédiatement',
        'Freelance via LEXOFT',
        'Missions 6–24 mois',
        'Télétravail / hybride (Orléans, Paris)',
      ],
      profile:
        `Architecte Cloud Senior certifié AWS (8 certifications cloud & éditeurs), 9+ ans d'expérience, ` +
        `fondateur de LEXOFT EURL. Je conçois et industrialise des plateformes cloud-natives critiques pour ` +
        `le secteur public, la banque et les éditeurs SaaS. Domaines de prédilection : architectures AWS ` +
        `scalables, industrialisation DevOps (Terraform, Kubernetes, Docker, GitLab CI/CD) et systèmes IAM ` +
        `à très haute exigence de sécurité (Keycloak SPI, MidPoint, FIDO2/WebAuthn, OAuth2/OIDC, SAML 2.0, ` +
        `MFA, RGPD). Dernière mission : 2 ans chez Atos / Ministère de l'Éducation Nationale sur le ` +
        `Référentiel National d'Identité — plateforme critique couvrant 33 académies, +5 millions ` +
        `d'utilisateurs, 0 incident majeur de sécurité. Expérience internationale confirmée au Canada ` +
        `(Toronto, Montréal) dans la fintech et le SaaS cloud.`,
      skills: [
        { label: 'Cloud AWS', items: 'EKS, ECS Fargate, Lambda, S3, RDS, EC2, CloudWatch, IAM, SNS, SQS, Bedrock, VPC, Route 53' },
        { label: 'DevOps & IaC', items: 'Terraform, Kubernetes (CKAD), Docker, GitLab CI/CD, Jenkins, Ansible, Helm, Prometheus, Grafana' },
        { label: 'Backend', items: 'Java 11/17, Spring Boot, Spring Batch, Spring Security, Micronaut, Python, REST APIs, Kafka, microservices' },
        { label: 'Front-end', items: 'Angular 14–21, TypeScript, RxJS, HTML5, CSS3, Bootstrap' },
        { label: 'IAM & Sécurité', items: 'Keycloak (SPI sur mesure), MidPoint, LDAP, OAuth2/OIDC, SAML 2.0, FIDO2/WebAuthn, MFA, OTP/TOTP, RGPD' },
        { label: 'Data & BDD', items: 'PostgreSQL, Oracle DB, MongoDB, DynamoDB, Redis' },
        { label: 'IA & GenAI', items: 'AWS Bedrock (Claude, Titan), RAG (LangChain, pgvector), prompt engineering, agents IA, fine-tuning' },
        { label: 'Méthodes', items: 'Agile/Scrum, DevSecOps, FinOps, TDD, code review, mentoring' },
        { label: 'Langues', items: 'Français (natif) · Anglais professionnel C1 (TOEIC 805/990) · Bilingue en contexte Canada' },
      ],
      certifications: [
        'AWS Certified Solutions Architect – Associate',
        'AWS Certified Developer – Associate',
        'AWS Certified Machine Learning Engineer – Associate',
        'AWS Certified AI Practitioner',
        'HashiCorp Certified: Terraform Associate (002)',
        'CKAD – Certified Kubernetes Application Developer',
        'VMware Spring Professional 2021',
        'Oracle Certified Professional, Java SE 11 (OCP)',
      ],
      experiences: [
        {
          company: "Atos · Ministère de l'Éducation Nationale",
          role: 'Ingénieur Cloud & IAM Senior',
          period: 'Juin 2024 — Mai 2026 · 2 ans',
          location: 'Orléans / Télétravail',
          context: "Référentiel National d'Identité (RNI) · 33 académies, +5 millions d'utilisateurs · Mission freelance via LEXOFT",
          highlights: [
            "Conception et déploiement d'une plateforme IAM nationale (Keycloak + MidPoint + LDAP) couvrant le cycle de vie complet des identités pour +5 millions d'utilisateurs sur 33 académies — 0 incident de sécurité critique sur 2 ans.",
            'Authentification forte OTP, TOTP et FIDO2/WebAuthn avec parcours personnalisés ; MFA renforcé, sessions avancées, politiques granulaires — réduction de 60 % des tickets liés aux accès.',
            'Industrialisation DevOps : pipelines GitLab CI/CD zero-downtime, containerisation Docker, observabilité Prometheus/Grafana, déploiements automatisés sur 5 environnements.',
            'Backend & APIs sécurisées : microservices Java 17/Spring Boot, providers Keycloak SPI sur mesure, pipelines Spring Batch traitant +500 000 entrées LDAP/CSV par cycle.',
            'Front-end Angular 14–18 (utilisateurs finaux et administrateurs académiques) ; thèmes Keycloak accessibles WCAG 2.1 ; conformité RGPD et exigences SSI secteur public.',
          ],
          stack: 'Java 17, Spring Boot, Spring Batch, Angular 14–18, Keycloak, MidPoint, LDAP, FIDO2/WebAuthn, GitLab CI/CD, Docker, PostgreSQL, Python',
        },
        {
          company: 'Atos · BRGM',
          role: 'Ingénieur Full-Stack (renfort BSN)',
          period: 'Avr. — Mai 2024 · 2 mois',
          location: 'Orléans',
          context: 'Bureau de Recherches Géologiques et Minières · Mission freelance via LEXOFT',
          highlights: [
            "Renfort full-stack : nouvelles fonctionnalités validées par les Tech Leads, APIs REST robustes, tâches CRON pour le calcul d'indicateurs géotechniques.",
            'Qualité : refonte UX de la liste des capteurs (Angular 17) ; couverture de tests unitaires portée à 85 %.',
          ],
          stack: 'Angular 17, Java, Spring Boot, REST APIs, PostgreSQL',
        },
        {
          company: 'Mimecast',
          role: 'Ingénieur Logiciel Senior (Cloud / AWS)',
          period: 'Janv. — Déc. 2023 · 1 an',
          location: 'Toronto, Canada',
          context: 'Plateforme de données cloud-native SaaS · collecte, stockage et analyse à grande échelle',
          highlights: [
            'AWS-native : microservices Java 11/Micronaut sur ECS Fargate, architecture multi-AZ haute disponibilité avec autoscaling — SLA 99,9 % maintenu.',
            "Performance : librairie Java multi-threadée pour transferts massifs S3 — réduction de ~50 % des temps de traitement batch.",
            'CI/CD complet (Jenkins + GitLab + Docker + Terraform), supervision CloudWatch + Lambda + SNS, alerting proactif.',
            'FinOps : réduction de 25 % des coûts cloud via instances Spot et politiques lifecycle S3.',
          ],
          stack: 'Java 11, Micronaut, AWS (ECS Fargate, S3, CloudWatch, Lambda, SNS), Terraform, Jenkins, Docker, GitLab, Kafka, PostgreSQL',
        },
        {
          company: 'Banque Nationale du Canada',
          role: 'Lead Developer Full-Stack',
          period: 'Nov. 2021 — Oct. 2022 · 1 an',
          location: 'Toronto, Canada',
          context: "Plateforme bancaire critique d'analytics financiers temps réel (ActiveViam) · environnement hautement réglementé",
          highlights: [
            'Architecture microservices Java/Spring Boot + React, APIs OAuth2 sécurisées — traitement de volumes financiers critiques sous charge.',
            'Infrastructure AWS EKS multi-AZ, CI/CD automatisé, monitoring CloudWatch/Prometheus/Grafana — disponibilité 99,95 % en production.',
            'Sécurité & FinOps : optimisation des coûts cloud (-20 %), supervision proactive, conformité OSFI (sécurité bancaire canadienne).',
          ],
          stack: 'Java, Spring Boot, Spring Security, React, AWS EKS, Kubernetes, GitLab, Prometheus, Grafana',
        },
        {
          company: 'Desjardins',
          role: 'Développeur Full-Stack Java',
          period: 'Juil. 2019 — Juil. 2021 · 2 ans',
          location: 'Montréal, Canada',
          context: "Application critique d'ouverture de comptes déployée dans toutes les agences Desjardins du Canada",
          highlights: [
            'Conception et développement de fonctionnalités clés Spring Boot/Spring MVC pour des milliers d\'utilisateurs internes quotidiens.',
            'UX & delivery : interface responsive pour agents bancaires (Bootstrap/JavaScript) ; gestion bout-en-bout besoins → conception → dev → prod → suivi.',
          ],
          stack: 'Java, Spring Boot, Spring MVC, Bootstrap, JavaScript, Oracle DB',
        },
        {
          company: 'Accenture · BNP Paribas',
          role: 'Développeur Java / DevOps',
          period: 'Nov. 2017 — Août 2018 · 10 mois',
          location: 'Paris',
          context: 'Projet bancaire BNP Paribas · outillage DevOps et développement applicatif',
          highlights: [
            'Mise en place des outils DevOps (Ansible, Jenkins, Nexus, GEMFIRE) ; librairie Java d\'envoi d\'emails réutilisée par 4 équipes ; tests automatisés.',
          ],
          stack: 'Java, Ansible, Jenkins, Nexus, GEMFIRE, IBM WAS, Splunk',
        },
      ],
      educations: [
        { title: 'BTS SIO — option SLAM (Solutions Logicielles et Applications Métiers)', school: 'YNOV Campus, Paris', period: '2015 — 2017' },
        { title: 'BTS Management des Unités Commerciales', school: 'IDRAC Business School, Paris', period: '2012 — 2014' },
      ],
      ui: {
        download: 'Télécharger le CV (PDF)',
        profile: 'Profil',
        experience: 'Expérience professionnelle',
        education: 'Formation',
        skills: 'Compétences techniques',
        certifications: 'Certifications',
        stack: 'Stack',
        footer: "Lettres de recommandation Atos / Ministère de l'Éducation Nationale et Atos / BRGM communiquées sur demande.",
      },
    },

    en: {
      title: 'Senior Cloud Architect & Engineer',
      subtitle: 'AWS · DevOps · Java / Angular · IAM',
      availability: [
        'Available immediately',
        'Freelance via LEXOFT',
        '6–24 month engagements',
        'Remote / hybrid (Orléans, Paris)',
      ],
      profile:
        `AWS-certified Senior Cloud Architect (8 cloud & vendor certifications), 9+ years of experience, ` +
        `founder of LEXOFT EURL. I design and industrialize mission-critical cloud-native platforms for the ` +
        `public sector, banking and SaaS vendors. Areas of expertise: scalable AWS architectures, DevOps ` +
        `industrialization (Terraform, Kubernetes, Docker, GitLab CI/CD) and high-security IAM systems ` +
        `(Keycloak SPI, MidPoint, FIDO2/WebAuthn, OAuth2/OIDC, SAML 2.0, MFA, GDPR). Latest engagement: ` +
        `2 years at Atos / French Ministry of Education on the National Identity Repository — a critical ` +
        `platform covering 33 education authorities, 5M+ users, 0 major security incident. Proven ` +
        `international experience in Canada (Toronto, Montréal) in fintech and cloud SaaS.`,
      skills: [
        { label: 'AWS Cloud', items: 'EKS, ECS Fargate, Lambda, S3, RDS, EC2, CloudWatch, IAM, SNS, SQS, Bedrock, VPC, Route 53' },
        { label: 'DevOps & IaC', items: 'Terraform, Kubernetes (CKAD), Docker, GitLab CI/CD, Jenkins, Ansible, Helm, Prometheus, Grafana' },
        { label: 'Backend', items: 'Java 11/17, Spring Boot, Spring Batch, Spring Security, Micronaut, Python, REST APIs, Kafka, microservices' },
        { label: 'Front-end', items: 'Angular 14–21, TypeScript, RxJS, HTML5, CSS3, Bootstrap' },
        { label: 'IAM & Security', items: 'Keycloak (custom SPI), MidPoint, LDAP, OAuth2/OIDC, SAML 2.0, FIDO2/WebAuthn, MFA, OTP/TOTP, GDPR' },
        { label: 'Data & Databases', items: 'PostgreSQL, Oracle DB, MongoDB, DynamoDB, Redis' },
        { label: 'AI & GenAI', items: 'AWS Bedrock (Claude, Titan), RAG (LangChain, pgvector), prompt engineering, AI agents, fine-tuning' },
        { label: 'Methods', items: 'Agile/Scrum, DevSecOps, FinOps, TDD, code review, mentoring' },
        { label: 'Languages', items: 'French (native) · Professional English C1 (TOEIC 805/990) · Bilingual in Canadian context' },
      ],
      certifications: [
        'AWS Certified Solutions Architect – Associate',
        'AWS Certified Developer – Associate',
        'AWS Certified Machine Learning Engineer – Associate',
        'AWS Certified AI Practitioner',
        'HashiCorp Certified: Terraform Associate (002)',
        'CKAD – Certified Kubernetes Application Developer',
        'VMware Spring Professional 2021',
        'Oracle Certified Professional, Java SE 11 (OCP)',
      ],
      experiences: [
        {
          company: 'Atos · French Ministry of Education',
          role: 'Senior Cloud & IAM Engineer',
          period: 'June 2024 — May 2026 · 2 yrs',
          location: 'Orléans / Remote',
          context: 'National Identity Repository (RNI) · 33 education authorities, 5M+ users · Freelance engagement via LEXOFT',
          highlights: [
            'Designed and deployed a national IAM platform (Keycloak + MidPoint + LDAP) covering the full identity lifecycle for 5M+ users across 33 education authorities — 0 critical security incident over 2 years.',
            'Strong authentication with OTP, TOTP and FIDO2/WebAuthn and custom user journeys; enhanced MFA, advanced sessions, granular policies — 60% reduction in access-related tickets.',
            'DevOps industrialization: zero-downtime GitLab CI/CD pipelines, Docker containerization, Prometheus/Grafana observability, automated deployments across 5 environments.',
            'Secured backend & APIs: Java 17/Spring Boot microservices, custom Keycloak SPI providers, Spring Batch pipelines processing 500,000+ LDAP/CSV entries per cycle.',
            'Angular 14–18 front-ends (end users and academic administrators); WCAG 2.1 accessible Keycloak themes; GDPR compliance and public-sector security requirements.',
          ],
          stack: 'Java 17, Spring Boot, Spring Batch, Angular 14–18, Keycloak, MidPoint, LDAP, FIDO2/WebAuthn, GitLab CI/CD, Docker, PostgreSQL, Python',
        },
        {
          company: 'Atos · BRGM',
          role: 'Full-Stack Engineer (BSN reinforcement)',
          period: 'Apr. — May 2024 · 2 mos',
          location: 'Orléans',
          context: 'French Geological Survey (BRGM) · Freelance engagement via LEXOFT',
          highlights: [
            'Full-stack reinforcement: new features validated by Tech Leads, robust REST APIs, CRON jobs computing geotechnical indicators.',
            'Quality: UX redesign of the sensor list (Angular 17); unit test coverage raised to 85%.',
          ],
          stack: 'Angular 17, Java, Spring Boot, REST APIs, PostgreSQL',
        },
        {
          company: 'Mimecast',
          role: 'Senior Software Engineer (Cloud / AWS)',
          period: 'Jan. — Dec. 2023 · 1 yr',
          location: 'Toronto, Canada',
          context: 'Cloud-native SaaS data platform · large-scale data collection, storage and analytics',
          highlights: [
            'AWS-native: Java 11/Micronaut microservices on ECS Fargate, high-availability multi-AZ architecture with autoscaling — 99.9% SLA maintained.',
            'Performance: multi-threaded Java library for large S3 transfers — ~50% reduction in batch processing times.',
            'Full CI/CD (Jenkins + GitLab + Docker + Terraform), CloudWatch + Lambda + SNS monitoring, proactive alerting.',
            'FinOps: 25% cloud cost reduction via Spot instances and S3 lifecycle policies.',
          ],
          stack: 'Java 11, Micronaut, AWS (ECS Fargate, S3, CloudWatch, Lambda, SNS), Terraform, Jenkins, Docker, GitLab, Kafka, PostgreSQL',
        },
        {
          company: 'National Bank of Canada',
          role: 'Full-Stack Lead Developer',
          period: 'Nov. 2021 — Oct. 2022 · 1 yr',
          location: 'Toronto, Canada',
          context: 'Mission-critical real-time financial analytics banking platform (ActiveViam) · highly regulated environment',
          highlights: [
            'Java/Spring Boot + React microservices architecture, secured OAuth2 APIs — processing critical financial volumes under load.',
            'AWS EKS multi-AZ infrastructure, automated CI/CD, CloudWatch/Prometheus/Grafana monitoring — 99.95% production availability.',
            'Security & FinOps: cloud cost optimization (-20%), proactive monitoring, OSFI compliance (Canadian banking security).',
          ],
          stack: 'Java, Spring Boot, Spring Security, React, AWS EKS, Kubernetes, GitLab, Prometheus, Grafana',
        },
        {
          company: 'Desjardins',
          role: 'Full-Stack Java Developer',
          period: 'Jul. 2019 — Jul. 2021 · 2 yrs',
          location: 'Montréal, Canada',
          context: 'Mission-critical account-opening application deployed across all Desjardins branches in Canada',
          highlights: [
            'Designed and developed key Spring Boot/Spring MVC features for thousands of daily internal users.',
            'UX & delivery: responsive interface for bank agents (Bootstrap/JavaScript); end-to-end ownership from requirements → design → dev → prod → support.',
          ],
          stack: 'Java, Spring Boot, Spring MVC, Bootstrap, JavaScript, Oracle DB',
        },
        {
          company: 'Accenture · BNP Paribas',
          role: 'Java / DevOps Developer',
          period: 'Nov. 2017 — Aug. 2018 · 10 mos',
          location: 'Paris',
          context: 'BNP Paribas banking project · DevOps tooling and application development',
          highlights: [
            'Set up DevOps tooling (Ansible, Jenkins, Nexus, GEMFIRE); reusable Java email library adopted by 4 teams; automated tests.',
          ],
          stack: 'Java, Ansible, Jenkins, Nexus, GEMFIRE, IBM WAS, Splunk',
        },
      ],
      educations: [
        { title: 'BTS SIO — SLAM track (Software Solutions & Business Applications)', school: 'YNOV Campus, Paris', period: '2015 — 2017' },
        { title: 'BTS Business Unit Management', school: 'IDRAC Business School, Paris', period: '2012 — 2014' },
      ],
      ui: {
        download: 'Download CV (PDF)',
        profile: 'Profile',
        experience: 'Professional experience',
        education: 'Education',
        skills: 'Technical skills',
        certifications: 'Certifications',
        stack: 'Stack',
        footer: 'Reference letters from Atos / French Ministry of Education and Atos / BRGM available on request.',
      },
    },
  };
}
