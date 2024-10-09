import React from 'react';
import profilePic from '../images/ProfessionalPhoto.png';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={profilePic} alt="Om Gautam" className="img-fluid smaller-profile-pic rounded-circle mb-4" />
          </div>
          <div className="col-md-8">
            <h1 className="display-4">
              Hello, I'm <span className="text-primary">Om Gautam</span>.
            </h1>
            <p className="lead">
              I’m a passionate Computer Science student at Georgia Tech, focusing on AI-driven applications and data
              analysis. I thrive in building solutions that matter.
            </p>
            <div className="btn-group mt-4">
              <a href="mailto:omgaut2020@gmail.com" className="btn btn-outline-primary btn-lg" target="_blank" rel="noopener noreferrer">
                Email
              </a>
              <a href="https://github.com/omgaut" className="btn btn-outline-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/om-gautam" className="btn btn-outline-info btn-lg" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://drive.google.com/file/d/1E9fU-YgKKyVijSqlQospIDo-7s6rATUN/view?usp=sharing" className="btn btn-outline-dark btn-lg" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <p className="about-text">
              I'm an undergraduate Computer Science student at <span className="highlight">Georgia Institute of Technology</span>. This past summer, I was on the 
              <span className="highlight"> Building-U</span> web development team, working on HTML/CSS and JavaScript wireframes along with dynamic React components.
              I am currently conducting research at Georgia Tech's <span className="highlight">GROWER Lab</span>, where I am working on cloud computing and
              optimizing data pipelines for geospatial utility outage data. My passion for <span className="highlight">AI</span> and cloud technologies has
              driven me to push boundaries and find innovative solutions for real-time data analysis.
              Beyond my research, I enjoy taking on personal projects like the <span className="highlight">AniManga Converter</span>, an iOS anime episode to manga chapter conversion application,
              and <span className="highlight">GlucoGuide</span>, a health tech solution for diabetes consulting.
            </p>
            <p className="about-text">
              At Georgia Tech, I am part of the <span className="highlight">RoboInvestment Platform</span> development team at <span className="highlight">Data Science @ GT</span>,
              and a member of <span className="highlight">Big Data Big Impact</span>, <span className="highlight">Venture Capital Club</span>, and <span className="highlight">Product @ GT</span>.
              I believe in leveraging technology to solve real-world problems, and I’m always eager to learn and explore new tools that can help me bring those solutions to life.
              In my free time, I love <span className="highlight">running</span>, <span className="highlight">watching anime</span>, <span className="highlight">playing billiards</span>, and <span className="highlight">working out</span>.
              I am also an avid player at <span className="highlight">GT Table Tennis Club</span>, so I'm always looking for ping pong paddle recommendations!
              Feel free to reach out and connect with me if you want to discuss anything at all!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
