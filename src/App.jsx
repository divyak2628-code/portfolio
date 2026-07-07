import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;