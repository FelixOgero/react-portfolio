export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/profile2.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          {/* <h1 className="skills-section--heading">About Me</h1> */}
          <p className="hero--section-description">
          As a versatile software developer, I excel in crafting dynamic and responsive 
          web applications, designing seamless mobile experiences, and harnessing the 
          power of data science to derive meaningful insights.
          </p>
          <p className="hero--section-description">
          With a keen eye for user-centric design and a robust skill set 
          spanning web development, mobile development and data science, I bring innovation and efficiency 
          to every project, delivering solutions that blend cutting-edge technology
           with a user-centric approach.
          </p>
        </div>
      </div>
    </section>
  );
}
