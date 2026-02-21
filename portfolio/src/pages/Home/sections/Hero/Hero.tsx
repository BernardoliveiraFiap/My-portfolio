import "../../../../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__title">
          Enzo <span className="hero__accent">Oliveira</span>
        </h1>
        <p className="hero__subtitle">Desenvolvedor Full Stack</p>
      </div>
    </section>
  );
};

export default Hero;