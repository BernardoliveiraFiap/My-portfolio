import "../../../../css/Hero.css";
import matrixImage from "../../../../assets/matrix.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Enzo <span className="hero__accent">Oliveira</span>
        </h1>
        <p className="hero__subtitle">Desenvolvedor Full Stack</p>
        <p className="hero__subtitle">
          Solucoes web e mobile com foco em performance, seguranca e
          escalabilidade.
        </p>
      </div>
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src={matrixImage}
          alt="Imagem estilo cyberpunk com duas pilulas nas maos"
        />
        <p className="hero__prompt hero__prompt--overlay">Escolha uma Pill</p>
        <a
          className="hero__hotspot hero__hotspot--red"
          href="#hard-skills"
          data-label="Hard skills"
          aria-label="Ir para a secao de hard skills"
        />
        <a
          className="hero__hotspot hero__hotspot--blue"
          href="#soft-skills"
          data-label="Soft skills"
          aria-label="Ir para a secao de soft skills"
        />
      </div>
    </section>
  );
};

export default Hero;