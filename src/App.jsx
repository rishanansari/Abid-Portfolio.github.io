import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import WorkExp from "./component/WorkExp";
import Education from "./component/Education";
import OurProjects from "./component/OurProject";
import Contact from "./component/Contact";


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<WorkExp />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
