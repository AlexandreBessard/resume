import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  readonly title = 'Architecte & Ingénieur Cloud Senior';
  readonly subtitle = 'AWS · DevOps · Java / Angular · IAM';

  readonly contacts = [
    { label: 'lexoft.eurl@gmail.com', href: 'mailto:lexoft.eurl@gmail.com' },
    { label: '+33 6 34 49 12 75', href: 'tel:+33634491275' },
    { label: 'Orléans (45), France', href: null },
    { label: 'linkedin.com/in/alexandrebessard', href: 'https://linkedin.com/in/alexandrebessard' },
    { label: 'lexoft-eurl.com', href: 'https://lexoft-eurl.com' },
  ];

  readonly availability = [
    'Disponible immédiatement',
    'Freelance via LEXOFT',
    'Missions 6–24 mois',
    'Télétravail / hybride (Orléans, Paris)',
    'TJM : 750–850 €/j HT',
  ];

  readonly profile =
    `Architecte Cloud Senior certifié AWS (8 certifications cloud & éditeurs), 9+ ans d'expérience, ` +
    `fondateur de LEXOFT EURL. Je conçois et industrialise des plateformes cloud-natives critiques pour ` +
    `le secteur public, la banque et les éditeurs SaaS. Domaines de prédilection : architectures AWS ` +
    `scalables, industrialisation DevOps (Terraform, Kubernetes, Docker, GitLab CI/CD) et systèmes IAM ` +
    `à très haute exigence de sécurité (Keycloak SPI, MidPoint, FIDO2/WebAuthn, OAuth2/OIDC, SAML 2.0, ` +
    `MFA, RGPD). Dernière mission : 2 ans chez Atos / Ministère de l'Éducation Nationale sur le ` +
    `Référentiel National d'Identité — plateforme critique couvrant 33 académies, +5 millions ` +
    `d'utilisateurs, 0 incident majeur de sécurité. Expérience internationale confirmée au Canada ` +
    `(Toronto, Montréal) dans la fintech et le SaaS cloud.`;

  readonly skills: SkillGroup[] = [
    { label: 'Cloud AWS', items: 'EKS, ECS Fargate, Lambda, S3, RDS, EC2, CloudWatch, IAM, SNS, SQS, Bedrock, VPC, Route 53' },
    { label: 'DevOps & IaC', items: 'Terraform, Kubernetes (CKAD), Docker, GitLab CI/CD, Jenkins, Ansible, Helm, Prometheus, Grafana' },
    { label: 'Backend', items: 'Java 11/17, Spring Boot, Spring Batch, Spring Security, Micronaut, Python, REST APIs, Kafka, microservices' },
    { label: 'Front-end', items: 'Angular 14–21, TypeScript, RxJS, HTML5, CSS3, Bootstrap' },
    { label: 'IAM & Sécurité', items: 'Keycloak (SPI sur mesure), MidPoint, LDAP, OAuth2/OIDC, SAML 2.0, FIDO2/WebAuthn, MFA, OTP/TOTP, RGPD' },
    { label: 'Data & BDD', items: 'PostgreSQL, Oracle DB, MongoDB, DynamoDB, Redis' },
    { label: 'IA & GenAI', items: 'AWS Bedrock (Claude, Titan), RAG (LangChain, pgvector), prompt engineering, agents IA, fine-tuning' },
    { label: 'Méthodes', items: 'Agile/Scrum, DevSecOps, FinOps, TDD, code review, mentoring' },
    { label: 'Langues', items: 'Français (natif) · Anglais professionnel C1 (TOEIC 805/990) · Bilingue en contexte Canada' },
  ];

  readonly certifications = [
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified Developer – Associate',
    'AWS Certified Machine Learning Engineer – Associate',
    'AWS Certified AI Practitioner',
    'HashiCorp Certified: Terraform Associate (002)',
    'CKAD – Certified Kubernetes Application Developer',
    'VMware Spring Professional 2021',
    'Oracle Certified Professional, Java SE 11 (OCP)',
  ];

  readonly experiences: Experience[] = [
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
  ];

  readonly educations: Education[] = [
    { title: 'BTS SIO — option SLAM (Solutions Logicielles et Applications Métiers)', school: 'YNOV Campus, Paris', period: '2015 — 2017' },
    { title: 'BTS Management des Unités Commerciales', school: 'IDRAC Business School, Paris', period: '2012 — 2014' },
  ];
}
