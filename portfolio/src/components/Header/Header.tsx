import "../../css/Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <a className="site-header__brand" href="#top">
          Enzo Oliveira
        </a>
        <nav className="site-header__nav" aria-label="Navegacao principal">
          <a href="#top">Inicio</a>
          <a href="#hard-skills">Hard skills</a>
          <a href="#soft-skills">Soft skills</a>
          <a href="#certifications">Certificacoes</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
