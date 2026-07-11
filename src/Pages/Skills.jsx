import "./Skills.css";

function Skills() {
  return (
    <section className="skills">

      <h2>My Skills</h2>

      <p className="skills-text">
        Here are some technologies that I have learned.
      </p>

      <div className="skills-container">

        <div className="skill-card">
          <h3>HTML</h3>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <h3>MySQL</h3>
        </div>

      </div>

    </section>
  );
}

export default Skills;