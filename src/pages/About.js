import React from 'react';
import './About.css'; // Create this CSS file for styling

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/path-to-your-image.jpg" alt="Tommy Wang" />
      <p>Hello! I'm Tommy Wang, a developer specializing in React and web development.</p>
      <a href="/path-to-resume.pdf" download className="btn">Download My Resume</a>
    </div>
  );
}

export default About;
