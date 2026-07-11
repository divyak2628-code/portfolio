import "./About.css";

function About() {
  return (
    <section className="about">

      <h2>About Me</h2>

      <p className="about-text">
        Hello! I'm Divya, a Computer Science Engineering student.
        I am passionate about Java Full Stack Development and
        continuously learning new technologies to improve my
        programming and web development skills.
      </p>

      <div className="about-container">

        <div className="about-card">
          <h3>Name</h3>
          <p>Divya</p>
        </div>

        <div className="about-card">
          <h3>Degree</h3>
          <p>B.TECH CSE</p>
        </div>

        <div className="about-card">
          <h3>Email</h3>
          <p>divya@email.com</p>
        </div>

        <div className="about-card">
          <h3>Location</h3>
          <p>Tamil Nadu</p>
        </div>

      </div>

    </section>
  );
}

export default About;