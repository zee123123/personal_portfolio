import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes path="/" component={<Home />}></Routes>
        <Routes path="/experience" component={<Experience />}></Routes>
        <Routes path="/projects" component={<Project />}></Routes>
        <Routes path="/contact" component={<Contact />}></Routes>
        <Routes path="/aboutme" component={<AboutMe />}></Routes>
      </Router>
    </div>
  );
}

export default App;
