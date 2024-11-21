import { Route, Routes } from "react-router-dom";
import { inject } from "@vercel/analytics";
import Home from "./screens/Home";
import Experience from "./screens/Experience";
import Skills from "./screens/Skills";
import NavBar from "./screens/NavBar";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
function App() {
  inject();
  return (
    <>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/experience" element={<Experience />} />,
          <Route path="/skills" element={<Skills />} />,
          <Route path="/projects" element={<Projects />} />,
          <Route path="/contact" element={<Contact />} />,
        </Routes>
      </>
    </>
  );
}

export default App;
