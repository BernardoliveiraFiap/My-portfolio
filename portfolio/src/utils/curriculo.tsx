import { jsPDF } from "jspdf";

type SectionItem = {
  title: string;
  items: string[];
};

const normalizeText = (value: string) => value.replace(/\s+/g, " ").trim();

const buildSections = (): SectionItem[] => [
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
  },
  {
    title: "Habilidades técnicas",
    items: [
      "TypeScript / JavaScript (ES6+), SQL, Python.",
      "React.js / Next.js, Node.js, React Native (Expo), C# .NET (Core / 8+).",
      "ORM (Entity Framework, Prisma) e bancos de dados SQL (PostgreSQL, SQL Server) e NoSQL (Firebase).",
      "Cloud Computing (AWS, Azure, GCP) e AWS (S3, RDS, Cognito, Amplify, Lambda, IAM, EC2, VPC, EKS, SES).",
      "Docker e conteinerização, Kubernetes, Linux, microsserviços e monitoramento de aplicações.",
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
];

export const generateCurriculoPdf = () => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginLeft = 85;
  const marginTop = 85;
  const marginRight = 57;
  const marginBottom = 57;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = pageWidth - marginLeft - marginRight;
  let cursorY = marginTop;
  const bodyFontSize = 12;
  const lineHeight = Math.round(bodyFontSize * 1.5);

  const addSpacing = (value = 10) => {
    cursorY += value;
  };

  const ensureSpace = (lines: number, lineHeightValue: number, extra = 0) => {
    const needed = lines * lineHeightValue + extra;
    if (cursorY + needed > pageHeight - marginBottom) {
      doc.addPage();
      cursorY = marginTop;
    }
  };

  const addTextBlock = (text: string, fontSize = bodyFontSize, bold = false) => {
    const normalized = normalizeText(text);
    const lines = doc.splitTextToSize(normalized, maxWidth);
    const currentLineHeight = Math.round(fontSize * 1.5);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(fontSize);
    ensureSpace(lines.length, currentLineHeight);
    doc.text(lines, marginLeft, cursorY);
    cursorY += lines.length * currentLineHeight;
  };

  const addSectionTitle = (title: string) => {
    addSpacing(8);
    addTextBlock(title.toUpperCase(), 12, true);
    addSpacing(4);
  };

  const addBullets = (items: string[]) => {
    items.forEach((item) => {
      const normalized = normalizeText(item);
      const lines = doc.splitTextToSize(normalized, maxWidth - 14);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(bodyFontSize);
      ensureSpace(lines.length, lineHeight);
      doc.text("•", marginLeft, cursorY);
      doc.text(lines, marginLeft + 12, cursorY);
      cursorY += lines.length * lineHeight;
    });
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Enzo Bernardo", marginLeft, cursorY);
  cursorY += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(bodyFontSize);
  addTextBlock(
    "Rua Professor José Geraldo de Lima, São Paulo - SP, 05367-180, Brasil"
  );
  addTextBlock("Email: enzo.o.bernardo5@gmail.com | Telefone: +55 11 98847-9283");

  buildSections().forEach((section) => {
    if (section.title === "Projetos") {
      doc.addPage();
      cursorY = marginTop;
    }
    addSectionTitle(section.title);
    addBullets(section.items);
  });

  doc.save("EnzoBernardo.pdf");
};
