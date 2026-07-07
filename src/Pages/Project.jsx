import "./Project.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <p className="project-text">
        Here are some projects I have completed.
      </p>

      <div className="project-container">

        <div className="project-card">
          <h3>Perfume Website</h3>

          <p>
            A simple perfume website created using HTML, CSS and JavaScript.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            A personal portfolio developed using React and CSS.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Student Management</h3>

          <p>
            A basic Java project with MySQL database.
          </p>

          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Projects;