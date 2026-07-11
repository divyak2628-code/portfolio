import "./Project.css";

function Projects() {
  return (
    <section className="projects">

      <h2>My Projects</h2>

      <p className="project-text">
        Here are some projects I have completed.
      </p>

      <div className="project-container">

        <div className="project-card">
          <h3>Job Portal</h3>

  <p> A Job Portal application developed using React, Spring Boot, and MySQL with user authentication, job posting, and job application features. </p>

  <button>View Project</button>
</div>

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p> A personal portfolio developed using HTML , CSS ,JavaScript and React. </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>TO-DO-LIST</h3>

          <p> A simple To-Do List application built using HTML, CSS, JavaScript, and React. It allows users to add, edit, delete, and mark tasks as completed. </p>
          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Projects;