import "../../../../css/Hero.css";
import matrixImage from "../../../../assets/matrix.png";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <div className="hero__headline">
          <div className="hero__name">
            <img
              className="hero__avatar"
              src="https://media.licdn.com/dms/image/v2/D4D03AQGIYn3g7fMYfQ/profile-displayphoto-scale_400_400/B4DZyC9unrJEAg-/0/1771723748715?e=1773273600&v=beta&t=LidKB1LM3u5KaiizdGpE2mdlnwQz4n44JL6zwesHuhM"
              alt="Foto de Enzo Oliveira"
            />
            <h1 className="hero__title">
              Enzo <span className="hero__accent">Oliveira</span>
            </h1>
            <a
              className="hero__linkedin"
              href="https://www.linkedin.com/in/enzoliveiria/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                className="hero__linkedin-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII="
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="hero__actions">
            <button className="hero__button" type="button">
              <img
                className="hero__button-icon"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Cpath%20d%3D%27M21%2015v4a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2v-4%27/%3E%3Cpath%20d%3D%27M7%2010l5%205%205-5%27/%3E%3Cpath%20d%3D%27M12%2015V3%27/%3E%3C/svg%3E"
                alt="Download"
              />
              Baixar Currículo
            </button>
            <a
              className="hero__button hero__button--whatsapp"
              href="https://wa.me/5511988479283"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="hero__button-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcEz////////////////////////////////////////////////r+u/Z9uL1/fhe24gAzUkf02Sh6LZ+4Z1t3pHG8dMC0Viw7MKQ5apL2HsasPsVAAAADXRSTlMANIfD7f8zYGIW4N4+qsA5tgAAAQdJREFUeAF9k4UWgzAMRYM8vG6j//+hKyfQ+S6WEq9QpWm7Hui7dqB3xh6VfnpRzQteWGeqbPhg+6Or2hkVIVWVOfIKRmpTsA7MQoUJjDchCiVdSpJ/jEXZs6iTrFYs9UQD/3FG4MIn/jbUsmBukNXX7jhoqcPBLR2BPVBHhe5MGcKhDGAE5+iJh3kHoolg1FnSqdRFiZAEIJ6VHHbPKOR0iyYISKM4LBcUeehNskbCZy7oasV6LsX5CHEmb6k5lQ4XymoWBuKkwkjpFGdImXX9sUG47WSS0bvz1uxgJiosALyPCtHnrNm/sL4u9ivz/23yf4Mx84oXlpmemZ439UjvDNdxaOjiDkjvFKpa/ei0AAAAAElFTkSuQmCC"
                alt="WhatsApp"
              />
              Mandar Mensagem
            </a>
            <a className="hero__button" href="#certifications">
              Ver Certificações
            </a>
            <a className="hero__button" href="#projects">
              Ver Projetos
            </a>
          </div>
        </div>
        <p className="hero__subtitle">Desenvolvedor Full Stack</p>
        <p className="hero__subtitle">
          Soluções web e mobile com foco em performance, segurança e
          escalabilidade.
        </p>
      </div>
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src={matrixImage}
          alt="Imagem estilo cyberpunk com duas pílulas nas mãos"
        />
        <p className="hero__prompt hero__prompt--overlay">Escolha uma pílula</p>
        <a
          className="hero__hotspot hero__hotspot--red"
          href="#hard-skills"
          data-label="Hard Skills"
          aria-label="Ir para a seção de Hard Skills"
        />
        <a
          className="hero__hotspot hero__hotspot--blue"
          href="#soft-skills"
          data-label="Soft Skills"
          aria-label="Ir para a seção de Soft Skills"
        />
      </div>
    </section>
  );
};

export default Hero;