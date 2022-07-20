import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects" >Projects</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/aboutme">About Me</Link>
    </div>
  );
}

export default Navbar