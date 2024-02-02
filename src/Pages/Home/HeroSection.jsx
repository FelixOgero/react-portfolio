export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Felix</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          I'm a dynamic software developer, specializing in web and mobile development, and data science.
            <br /> With a passion for innovation, I create solutions that blend cutting-edge technology and user-centric design.
          </p>
        </div>
        <a href="/cv/cv.pdf" download className="hero--section-cv">
          <button className="btn btn-primary">Download CV</button>
      </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
