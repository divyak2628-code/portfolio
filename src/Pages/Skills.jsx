import "./Skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "MySQL",
    "GitHub"
  ];

  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <p className="skills-text">
        Here are some technologies and tools that I have learned.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;