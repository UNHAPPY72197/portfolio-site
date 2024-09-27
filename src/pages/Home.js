import React from 'react';
import './Home.css'; // Create this CSS file to style your page

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Tommy Wang, a passionate web developer.</p>
      <a href="/about" className="btn">Learn More About Me</a>
    </div>
  );
}

export default Home;
