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
    contact: "Site: enzobernardo.com | Email: enzo.o.bernardo5@gmail.com | Telefone: +55 11 98847-9283 | LinkedIn: linkedin.com/in/enzoliveiria",
    sections: [
      {
        title: "Resumo profissional",
        items: [
          "Desenvolvedor Full Stack com foco em produtos Web e Mobile escaláveis, atuando ponta a ponta em front-end, back-end, banco de dados e cloud.",
          "Experiência prática com arquitetura moderna, integrações REST, autenticação segura, DevOps e automação de deploy/release.",
          "Portfólio profissional atualizado em enzobernardo.com.",
        ],
      },
      {
        title: "Experiência profissional",
        items: [
          "1) GEPRODE - Desenvolvedor Front-End / DevOps | São Paulo, Brasil | Mai 2024 - Nov 2025 | Híbrido",
          "Contexto: responsável pelo SaaS geoRISCO (mobile + web), com 95% da base mobile implementada individualmente.",
          "Stack principal: React, Next.js, React Native (Expo), TypeScript, Node.js e AWS.",
          "Entregas: desenvolvimento e manutenção de interfaces, arquitetura de componentes, Context API, hooks e integração com APIs REST.",
          "Segurança: implementação de autenticação com AWS Cognito (MFA), recuperação de senha via SES e gestão de grupos/permissões.",
          "Cloud/Infra: configuração e operação de VPC, IAM, EC2, EKS, Lambda, SES, S3, RDS PostgreSQL e Amplify.",
          "DevOps: contribuição em CI/CD, processos de deploy e manutenção contínua de infraestrutura em nuvem.",
          "Publicação mobile: automação do fluxo de build e release para App Store e Google Play.",
          "Impacto: solução usada em projeto crítico de infraestrutura (Linha 6 do Metrô de São Paulo) e publicada em lojas oficiais.",
          "2) IPOOL CARE - Prestador de serviços de TI | Projetos sob demanda",
          "Atuação em manutenção, evolução e suporte técnico de soluções para clientes.",
          "Entrega de melhorias funcionais e técnicas com foco em estabilidade e experiência do usuário.",
        ],
      },
      {
        title: "Projetos relevantes",
        items: [
          "GEORISCO Mobile: app desenvolvido do zero para monitoramento e gestão de risco geológico, com foco em confiabilidade e performance.",
          "Responsabilidades: frontend mobile completo, integração com backend e serviços AWS, além de entrega para lojas.",
          "Links: play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR | apps.apple.com/au/app/georisco/id6746808776",
          "GEORISCO Web: plataforma web derivada da estratégia mobile-first, com colaboração em frontend, backend e cloud.",
          "Link: georisco.com",
          "iPool Care: atuação em serviços e soluções de TI orientadas a negócio.",
          "Link: ipoolcare.com",
          "Portfólio completo: enzobernardo.com",
        ],
      },
      {
        title: "Habilidades técnicas",
        items: [
          "Linguagens: TypeScript, JavaScript (ES6+), SQL, Python.",
          "Frontend: React.js, Next.js, React Native (Expo), HTML/CSS, arquitetura de componentes e responsividade.",
          "Backend: Node.js, C# .NET (Core/8+), APIs REST e lógica de negócios.",
          "Dados: PostgreSQL, SQL Server, Firebase (NoSQL), Prisma e Entity Framework.",
          "Cloud: AWS, Azure, GCP; com experiência prática em Cognito, S3, RDS, Lambda, EC2, IAM, VPC, EKS, SES e Amplify.",
          "DevOps: CI/CD, Docker, Kubernetes, Linux, monitoramento de aplicações e automação de release mobile.",
          "Processo: análise de requisitos, desenho de arquitetura, testes automatizados e colaboração com produto/design.",
          "Ferramentas: Git, Ansible (IaC) e Figma.",
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
        title: "Formações",
        items: [
          "FIAP CST em Análise e Desenvolvimento de Sistemas - concluído 2023-2024 (2 anos).",
          "FIAP + Alura (Pós Tech) Pós-graduação em DevOps e Arquitetura Cloud - iniciada em 2026 (em andamento).",
        ],
      },
      {
        title: "Certificações",
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
          "Site/Portfólio: https://enzobernardo.com",
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
    contact: "Website: enzobernardo.com | Email: enzo.o.bernardo5@gmail.com | Phone: +55 11 98847-9283 | LinkedIn: linkedin.com/in/enzoliveiria",
    sections: [
      {
        title: "Professional Summary",
        items: [
          "Full Stack Software Developer focused on scalable Web and Mobile products, delivering across front-end, back-end, database, and cloud.",
          "Hands-on experience with modern architecture, REST integrations, secure authentication, DevOps, and release automation.",
          "Updated portfolio and resume available at enzobernardo.com.",
        ],
      },
      {
        title: "Professional Experience",
        items: [
          "1) GEPRODE - Front-End Developer / DevOps | Sao Paulo, Brazil | May 2024 - Nov 2025 | Hybrid",
          "Scope: responsible for the geoRISCO SaaS platform (mobile + web), with 95% of the mobile codebase built individually.",
          "Core stack: React, Next.js, React Native (Expo), TypeScript, Node.js, and AWS.",
          "Deliveries: UI architecture and implementation, API integrations, Context API/hooks, and continuous product evolution.",
          "Security: implemented AWS Cognito authentication (MFA), password recovery via SES, and role/group-based access control.",
          "Cloud/Infra: configured and operated VPC, IAM, EC2, EKS, Lambda, SES, S3, RDS PostgreSQL, and Amplify.",
          "DevOps: contributed to CI/CD, cloud reliability, and production deployment workflows.",
          "Mobile release pipeline: automated build and publishing flow for App Store and Google Play.",
          "Impact: platform used in a critical infrastructure context (Sao Paulo Metro Line 6) and published in official stores.",
          "2) IPOOL CARE - IT Services Provider | On-demand projects",
          "Worked on maintenance, evolution, and technical support for client-facing solutions.",
          "Delivered functional and technical improvements focused on product stability and user experience.",
        ],
      },
      {
        title: "Highlighted Projects",
        items: [
          "GEORISCO Mobile: app built from scratch for geological risk monitoring and management, focused on reliability and performance.",
          "Responsibilities: full mobile frontend, backend integrations, AWS setup/usage, and store releases.",
          "Links: play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR | apps.apple.com/au/app/georisco/id6746808776",
          "GEORISCO Web: complete web platform evolved from a mobile-first strategy, with contributions across frontend, backend, and cloud.",
          "Link: georisco.com",
          "iPool Care: delivery of business-oriented IT services and solutions.",
          "Link: ipoolcare.com",
          "Complete portfolio: enzobernardo.com",
        ],
      },
      {
        title: "Technical Skills",
        items: [
          "Languages: TypeScript, JavaScript (ES6+), SQL, Python.",
          "Frontend: React.js, Next.js, React Native (Expo), component architecture, and responsive UI.",
          "Backend: Node.js, C# .NET (Core/8+), REST APIs, and business logic implementation.",
          "Data: PostgreSQL, SQL Server, Firebase (NoSQL), Prisma, and Entity Framework.",
          "Cloud: AWS, Azure, GCP; practical AWS usage with Cognito, S3, RDS, Lambda, EC2, IAM, VPC, EKS, SES, and Amplify.",
          "DevOps: CI/CD, Docker, Kubernetes, Linux, app monitoring, and mobile release automation.",
          "Engineering process: requirements analysis, architecture design, automated testing, and product/design collaboration.",
          "Tools: Git, Ansible (IaC), and Figma.",
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
          "FIAP + Alura (Pós Tech) Postgraduate Specialization in DevOps and Cloud Architecture - started in 2026 (in progress).",
        ],
      },
      {
        title: "Certifications",
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
          "Website/Portfolio: https://enzobernardo.com",
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
