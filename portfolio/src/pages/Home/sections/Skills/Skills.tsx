import "../../../../css/Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills" id="hard-skills">
        <div className="skills__content">
          <h2 className="skills__title">Hard skills</h2>
          <p className="skills__subtitle">
            Experiencia em desenvolvimento full stack, mobile e cloud, com foco
            em performance e entrega de produtos escalaveis.
          </p>
          <div className="skills__card">
            <ul>
              <li>TypeScript, React.js, Next.js e Node.js</li>
              <li>React Native (apps performaticos)</li>
              <li>Python para automacoes e APIs</li>
              <li>SQL e Amazon RDS (Postgres)</li>
              <li>AWS: S3, Lambda, Cognito, VPC, EC2, EKS e SES</li>
              <li>CI/CD e publicacao em Play Store e App Store</li>
              <li>Figma para colaboracao com UX/UI</li>
              <li>App: GEORISCO (Play Store e App Store)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="skills" id="soft-skills">
        <div className="skills__content">
          <h2 className="skills__title">Soft skills</h2>
          <p className="skills__subtitle">
            Boas praticas, comunicacao e colaboracao para entregar valor com
            consistencia.
          </p>
          <div className="skills__card">
            <ul>
              <li>Comunicacao clara com time e clientes</li>
              <li>Colaboracao e trabalho em equipe</li>
              <li>Organizacao e foco em qualidade</li>
              <li>Proatividade para resolver problemas</li>
              <li>Aprendizado continuo e adaptabilidade</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
