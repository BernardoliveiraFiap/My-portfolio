import "../../../../css/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__content">
        <div className="projects__header">
          <h2 className="projects__title" id="projects">PROJETOS/EXPERIÊNCIA</h2>
          <p className="projects__subtitle">
            Experiências recentes com foco em produtos digitais escaláveis.
          </p>
        </div>
        <div className="projects__grid">
          <article className="projects__card">
            <div className="projects__media" aria-hidden="true">
              <span>Foto do projeto</span>
            </div>
            <div className="projects__eyebrow">Mobile</div>
            <h3 className="projects__name">GEORISCO Mobile</h3>
            <p className="projects__description">
              App criado do zero para monitoramento e gestão de risco geológico,
              com distribuição nas lojas e foco em performance.
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React Native</span>
              <span>AWS</span>
              <span>CI/CD</span>
            </div>
            <a className="projects__cta" href="#">
              Visitar projeto
            </a>
          </article>
          <article className="projects__card">
            <div className="projects__media" aria-hidden="true">
              <span>Foto do projeto</span>
            </div>
            <div className="projects__eyebrow">Produto Web</div>
            <h3 className="projects__name">GEORISCO Web</h3>
            <p className="projects__description">
              Plataforma web completa para gestão de dados e dashboards,
              integrada com serviços cloud e APIs escaláveis.
            </p>
            <div className="projects__meta">Geprode</div>
            <div className="projects__tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Postgres</span>
            </div>
            <a className="projects__cta" href="#">
              Visitar projeto
            </a>
          </article>
          <article className="projects__card">
            <div className="projects__media" aria-hidden="true">
              <span>Foto do projeto</span>
            </div>
            <div className="projects__eyebrow">Em Andamento</div>
            <h3 className="projects__name">iPool Care</h3>
            <p className="projects__description">
              Atuo atualmente em projetos voltados para operação e suporte a
              piscinas, com foco em confiabilidade e experiência do usuário.
            </p>
            <div className="projects__meta">iPool Care</div>
            <div className="projects__tags">
              <span>Full Stack</span>
              <span>Mobile</span>
              <span>Cloud</span>
            </div>
            <a className="projects__cta" href="#">
              Visitar Projeto
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
