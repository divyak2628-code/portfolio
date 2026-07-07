import "./Header.css";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Divya</h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          I am a Computer Science Engineering student.
          I enjoy creating simple and beautiful websites
          using React.
        </p>


      </div>

      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;