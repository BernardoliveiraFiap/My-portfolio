import "../../../../css/Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills" id="hard-skills">
        <div className="skills__content">
          <h2 className="skills__title">Hard Skills</h2>
          <p className="skills__subtitle">
            Experiência em desenvolvimento Full Stack, mobile e cloud, com foco
            em performance e entrega de produtos escaláveis.
          </p>
          <div className="skills__card">
            <ul>
              <li>TypeScript / JavaScript (ES6+)</li>
<li>React.js / Next.js</li>
<li>Node.js</li>
<li>React Native (Expo)</li>
<li>C#  .NET (Core / 8+)</li>

<li>ORM (Entity Framework, Prisma)</li>

<li>Bancos de Dados SQL (PostgreSQL, SQL Server) e NoSQL (Firebase)</li>
<li>Cloud Computing (AWS, Azure, GCP)</li>
<li>Docker & Containerização</li>

<li>CI/CD e Automação de Publicação (App Store & Play Store)</li>
<li>Figma para colaboração com UX/UI</li>
              
            </ul>
          </div>
        </div>
      </section>
      <section className="skills" id="soft-skills">
        <div className="skills__content">
          <h2 className="skills__title">Soft Skills</h2>
          <p className="skills__subtitle">
            Boas práticas, comunicação e colaboração para entregar valor com
            consistência.
          </p>
          <div className="skills__card">
            <ul>
              <li>Comunicação clara com time e clientes</li>
              <li>Colaboração e trabalho em equipe</li>
              <li>Organização e foco em qualidade</li>
              <li>Proatividade para resolver problemas</li>
              <li>Aprendizado contínuo e adaptabilidade</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
