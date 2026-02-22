import "../../css/Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <a className="site-header__brand" href="#top">
          Enzo Oliveira
        </a>
        <nav className="site-header__nav" aria-label="Navegação principal">
          <a href="#top">Início</a>
          <a href="#hard-skills">Hard Skills</a>
          <a href="#soft-skills">Soft Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#certifications">Certificações</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
