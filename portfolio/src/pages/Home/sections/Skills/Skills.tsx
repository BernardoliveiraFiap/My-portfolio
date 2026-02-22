import "../../../../css/Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills" id="hard-skills">
        <div className="skills__content">
          <h2 className="skills__title">Hard skills</h2>
          <p className="skills__subtitle">
            Experiência em desenvolvimento full stack, mobile e cloud, com foco
            em performance e entrega de produtos escaláveis.
          </p>
          <div className="skills__card">
            <ul>
              <li>TypeScript, React.js, Next.js e Node.js</li>
              <li>React Native (apps performáticos)</li>
              <li>Python para automações e APIs</li>
              <li>SQL e Amazon RDS (Postgres)</li>
              <li>AWS: S3, Lambda, Cognito, VPC, EC2, EKS e SES</li>
              <li>CI/CD e publicação em Play Store e App Store</li>
              <li>Figma para colaboração com UX/UI</li>
              <li>App: GEORISCO (Play Store e App Store)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="skills" id="soft-skills">
        <div className="skills__content">
          <h2 className="skills__title">Soft skills</h2>
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
