import {Link} from "react-router-dom"
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>
<nav>
      <ul className="nav-links">
         <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/skills"}>Skills</Link>
      <Link to={"/project"}>Project</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/footer"}>Footer</Link>
      </ul>
      </nav>
    </nav>
  );
}

export default Navbar;