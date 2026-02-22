export type ResumeSection = {
  title: string;
  items: string[];
  pageBreakBefore?: boolean;
};

export type ResumeContent = {
  fileName: string;
  name: string;
  address: string;
  contact: string;
  sections: ResumeSection[];
};

const resumeByLanguage: Record<string, ResumeContent> = {
  "pt-BR": {
    fileName: "EnzoBernardo-Curriculo.pdf",
    name: "Enzo Bernardo",
    address: "Rua Professor José Geraldo de Lima, São Paulo - SP, 05367-180, Brasil",
    contact: "Email: enzo.o.bernardo5@gmail.com | Telefone: +55 11 98847-9283",
    sections: [
      {
        title: "Resumo",
        items: [
          "Desenvolvedor de Software com formação tecnológica, especializado em soluções Web e Mobile. Atuo na arquitetura front-end e back-end, incluindo bancos de dados.",
          "Disponível para freelas e oportunidades.",
        ],
      },
      {
        title: "Experiência",
        items: [
          "Geprode - São Paulo, Brasil | Mai 2024 - Nov 2025 | Híbrido.",
          "Desenvolvedor Front-End / DevOps responsável pelo SaaS Mobile e Webapp geoRISCO, com 95% da base de código mobile desenvolvida individualmente.",
          "Desenvolvimento e manutenção da interface do usuário, consumo de API, Context API e hooks utilizando React, Next.js, React Native, Expo, TypeScript e AWS.",
          "Autenticação e segurança: implementei login com AWS Cognito com autenticação multifator (MFA) e recuperação de senha via SES.",
          "Gerenciamento de permissões: gerencio grupos de usuários e permissões através do Cognito.",
          "Desenvolvimento mobile: automatizo a criação e publicação ponta a ponta de apps na App Store e Play Store.",
          "Serviços AWS: configurei VPC, IAM, EC2, EKS; implantei funções Lambda; gerencio SES, S3, RDS Postgres e AWS Amplify.",
          "Integração de API: integradas APIs REST para alimentar o front-end, garantindo comunicação eficiente com o back-end.",
          "DevOps: contribuo para implantação contínua e manutenção da infraestrutura em nuvem AWS.",
          "Projeto: SaaS privado para análise de risco geológico (usado na Linha 6 do Metrô de São Paulo e disponível nas lojas).",
          "iPool Care - Prestador de serviços de TI.",
        ],
      },
      {
        title: "Projetos",
        items: [
          "GEORISCO Mobile - Frontend e AWS do app criado do zero para monitoramento e gestão de risco geológico no metrô de São Paulo, com distribuição nas lojas e foco em performance.",
          "Links: https://play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR | https://apps.apple.com/au/app/georisco/id6746808776",
          "GEORISCO Web - Plataforma web completa, código reaproveitado do mobile first. Colaborei na criação do CMS no front-end, back-end e cloud.",
          "Link: https://georisco.com/",
          "iPool Care - Prestador de serviços de TI.",
          "Link: https://ipoolcare.com/",
        ],
        pageBreakBefore: true,
      },
      {
        title: "Habilidades técnicas",
        items: [
          "TypeScript / JavaScript (ES6+), SQL, Python.",
          "React.js / Next.js, Node.js, React Native (Expo), C# .NET (Core / 8+).",
          "ORM (Entity Framework, Prisma) e bancos de dados SQL (PostgreSQL, SQL Server) e NoSQL (Firebase).",
          "Cloud Computing (AWS, Azure, GCP) e AWS (S3, RDS, Cognito, Amplify, Lambda, IAM, EC2, VPC, EKS, SES).",
          "Docker e containerização, Kubernetes, Linux, microsserviços e monitoramento de aplicações.",
          "CI/CD, DevOps, automação de publicação (App Store e Play Store), Git, APIs REST e IaC com Ansible.",
          "Análise de requisitos, design de arquitetura, implementação da lógica de negócios e testes automatizados.",
          "Design e UI/UX: criação de componentes, estilização, responsividade e design de interface.",
          "Figma para colaboração com UX/UI.",
        ],
      },
      {
        title: "Soft skills",
        items: [
          "Comunicação clara com time e clientes.",
          "Colaboração e trabalho em equipe.",
          "Organização e foco em qualidade.",
          "Proatividade para resolver problemas.",
          "Aprendizado contínuo e adaptabilidade.",
        ],
      },
      {
        title: "Formação",
        items: [
          "FIAP CST em Análise e Desenvolvimento de Sistemas - concluído 2023-2024 (2 anos).",
        ],
      },
      {
        title: "Certificação",
        items: [
          "AWS Certified Cloud Practitioner, Amazon Web Services Training and Certification - Jun 2025 a Jun 2028.",
          "Microsoft Certified, AZ-900 Azure Fundamentals - Setembro 2025.",
        ],
      },
      {
        title: "Certificados e cursos",
        items: [
          "DP-900: Implementação e Análise de Dados em Nuvem - SENAI.",
          "Qualificação Profissional em Análise de Sistemas e Prototipagem Web - FIAP.",
          "Qualificação Profissional em Desenvolvimento e Design Web 2.0 - FIAP.",
          "Qualificação Profissional em Desenvolvimento de Aplicações Mobile - FIAP.",
          "15+ cursos adicionais concluídos na Alura e FIAP.",
        ],
      },
      {
        title: "Mídias sociais",
        items: [
          "YouTube: https://www.youtube.com/@EnzoliveiraTech",
          "LinkedIn: https://www.linkedin.com/in/enzoliveiria/",
        ],
      },
      {
        title: "Idiomas",
        items: [
          "Português: nativo.",
          "Inglês: avançado.",
          "Espanhol: básico.",
        ],
      },
    ],
  },
  en: {
    fileName: "EnzoBernardo-Resume.pdf",
    name: "Enzo Bernardo",
    address: "Rua Professor José Geraldo de Lima, São Paulo - SP, 05367-180, Brazil",
    contact: "Email: enzo.o.bernardo5@gmail.com | Phone: +55 11 98847-9283",
    sections: [
      {
        title: "Summary",
        items: [
          "Software developer with a technology degree, specialized in Web and Mobile solutions. I work on front-end and back-end architecture, including databases.",
          "Available for freelance and opportunities.",
        ],
      },
      {
        title: "Experience",
        items: [
          "Geprode - São Paulo, Brazil | May 2024 - Nov 2025 | Hybrid.",
          "Front-End Developer / DevOps responsible for the geoRISCO SaaS Mobile and Webapp, with 95% of the mobile codebase developed individually.",
          "Development and maintenance of the user interface, API consumption, Context API and hooks using React, Next.js, React Native, Expo, TypeScript, and AWS.",
          "Authentication and security: implemented login with AWS Cognito with multi-factor authentication (MFA) and password recovery via SES.",
          "Permissions management: manage user groups and permissions through Cognito.",
          "Mobile development: automate end-to-end creation and publishing of apps to the App Store and Play Store.",
          "AWS services: configured VPC, IAM, EC2, EKS; deployed Lambda functions; managed SES, S3, RDS Postgres, and AWS Amplify.",
          "API integration: integrated REST APIs to power the front-end, ensuring efficient communication with the back-end.",
          "DevOps: contribute to continuous deployment and maintenance of AWS cloud infrastructure.",
          "Project: private SaaS for geological risk analysis (used on São Paulo Metro Line 6 and available in stores).",
          "iPool Care - IT services provider.",
        ],
      },
      {
        title: "Projects",
        items: [
          "GEORISCO Mobile - Frontend and AWS for the app built from scratch to monitor and manage geological risk in the São Paulo subway, with store distribution and a focus on performance.",
          "Links: https://play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR | https://apps.apple.com/au/app/georisco/id6746808776",
          "GEORISCO Web - Complete web platform, code reused from the mobile-first app. I collaborated on the CMS in the front-end, back-end, and cloud.",
          "Link: https://georisco.com/",
          "iPool Care - IT services provider.",
          "Link: https://ipoolcare.com/",
        ],
        pageBreakBefore: true,
      },
      {
        title: "Technical Skills",
        items: [
          "TypeScript / JavaScript (ES6+), SQL, Python.",
          "React.js / Next.js, Node.js, React Native (Expo), C# .NET (Core / 8+).",
          "ORM (Entity Framework, Prisma) and SQL databases (PostgreSQL, SQL Server) and NoSQL (Firebase).",
          "Cloud Computing (AWS, Azure, GCP) and AWS (S3, RDS, Cognito, Amplify, Lambda, IAM, EC2, VPC, EKS, SES).",
          "Docker and containerization, Kubernetes, Linux, microservices, and application monitoring.",
          "CI/CD, DevOps, release automation (App Store and Play Store), Git, REST APIs, and IaC with Ansible.",
          "Requirements analysis, architecture design, business logic implementation, and automated tests.",
          "Design and UI/UX: component creation, styling, responsiveness, and interface design.",
          "Figma for UX/UI collaboration.",
        ],
      },
      {
        title: "Soft Skills",
        items: [
          "Clear communication with teams and clients.",
          "Collaboration and teamwork.",
          "Organization and quality focus.",
          "Proactivity in problem solving.",
          "Continuous learning and adaptability.",
        ],
      },
      {
        title: "Education",
        items: [
          "FIAP Technology Degree in Systems Analysis and Development - completed 2023-2024 (2 years).",
        ],
      },
      {
        title: "Certification",
        items: [
          "AWS Certified Cloud Practitioner, Amazon Web Services Training and Certification - Jun 2025 to Jun 2028.",
          "Microsoft Certified, AZ-900 Azure Fundamentals - September 2025.",
        ],
      },
      {
        title: "Certificates and Courses",
        items: [
          "DP-900: Cloud Data Implementation and Analysis - SENAI.",
          "Professional Qualification in Systems Analysis and Web Prototyping - FIAP.",
          "Professional Qualification in Web Development and Design 2.0 - FIAP.",
          "Professional Qualification in Mobile Application Development - FIAP.",
          "15+ additional courses completed at Alura and FIAP.",
        ],
      },
      {
        title: "Social Media",
        items: [
          "YouTube: https://www.youtube.com/@EnzoliveiraTech",
          "LinkedIn: https://www.linkedin.com/in/enzoliveiria/",
        ],
      },
      {
        title: "Languages",
        items: [
          "Portuguese: native.",
          "English: advanced.",
          "Spanish: basic.",
        ],
      },
    ],
  },
};

export const getResumeContent = (language: string): ResumeContent => {
  if (resumeByLanguage[language]) {
    return resumeByLanguage[language];
  }

  if (language.toLowerCase().startsWith("pt")) {
    return resumeByLanguage["pt-BR"];
  }

  if (language.toLowerCase().startsWith("en")) {
    return resumeByLanguage.en;
  }

  return resumeByLanguage["pt-BR"];
};
