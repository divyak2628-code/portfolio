import { useState } from "react";
import "./Header.css";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";

function Header() {

  const [image, setImage] = useState(profile1);

  function changeImage() {
    if (image === profile1) {
      setImage(profile2);
    } else {
      setImage(profile1);
    }
  }

  return (
    <section className="header" id="home">

      <img
        src={image}
        alt="Profile"
        className="profile"
        onClick={changeImage}
      />

      <h1>Hello, I'm Divya</h1>

      <h2>Java Full Stack Developer</h2>

      <p> Welcome to my portfolio website</p>
      <p> Passionate Java Full Stack Developer with a strong interest in creating modern web applications and continuously learning new technologies.</p>
    </section>
  );
}

export default Header;