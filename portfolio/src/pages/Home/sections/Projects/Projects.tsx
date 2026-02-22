import "../../../../css/Projects.css";
import ProjectButton from "../../../../components/ProjectButton/ProjectButton";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <div className="projects__header">
          <h2 className="projects__title">PROJETOS</h2>
          <p className="projects__subtitle">
            Experiências recentes com foco em produtos digitais escaláveis.
          </p>
        </div>
        <div className="projects__grid">
          <article className="projects__card">
            <div className="projects__media">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/6f/e9/cd6fe91f-bc75-8cb7-13ce-8fae5536c160/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/200x200ia-75.webp"
                alt="Logo do app GEORISCO Mobile"
              />
            </div>
            <div className="projects__eyebrow">Mobile</div>
            <h3 className="projects__name">GEORISCO Mobile</h3>
            <p className="projects__description">
              Frontend e AWS do app criado do zero por mim para monitoramento e gestão de risco geológico no metrô de São Paulo,
              com distribuição nas lojas e foco em performance.
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>AWS</span>
              <span>CI/CD</span>
            </div>
            <div className="projects__actions">
              <ProjectButton
                href="https://play.google.com/store/apps/details?id=com.geprode.geoRISCO&hl=pt_BR"
                label="Google Play"
              />
              <ProjectButton
                href="https://apps.apple.com/au/app/georisco/id6746808776"
                label="App Store"
              />
            </div>
          </article>
          <article className="projects__card">
            <div className="projects__media">
              <img
                src="https://georiscoimages.s3.us-east-1.amazonaws.com/images/logos/logo_verde_transparente-30.svg"
                alt="Logo do GEORISCO Web"
              />
            </div>
            <div className="projects__eyebrow">Produto Web</div>
            <h3 className="projects__name">GEORISCO Web</h3>
            <p className="projects__description">
              Plataforma web completa, código reaproveitado do mobile first. Além disso, colaborei na criação do CMS no front-end, back-end e cloud.
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>DevOps</span>
            </div>
            <ProjectButton
              href="https://georisco.com/"
              label="Visitar projeto"
            />
          </article>
          <article className="projects__card">
            <div className="projects__media">
              <img
                src="https://ipoolcare.com/wp-content/uploads/2024/05/logo.png"
                alt="Logo do iPool Care"
              />
            </div>
            
            <h3 className="projects__name">iPool Care</h3>
            <p className="projects__description">
              Prestador de serviços de TI.
            </p>
            <div className="projects__meta">iPool Care</div>
            <div className="projects__tags">
              
            </div>
            <ProjectButton
              href="https://ipoolcare.com/"
              label="Visitar projeto"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
