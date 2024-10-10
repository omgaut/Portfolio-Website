import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Experience</h2>
        <div className="timeline">
          {/* Experience 1: Cloud Computing and Data Expansion Researcher */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Aug 2024 – Present</div>
            <div className="timeline-content">
              <h5 className="experience-title">Cloud Computing and Data Expansion Researcher</h5>
              <h6 className="experience-subtitle">Georgia Tech GROWER Lab</h6>
              <p>
                Utilized Amazon EventBridge to trigger Selenium-based web scraping scripts, collecting geospatial power 
                outage data from 300+ utility maps. Developed AWS Lambda functions for optimized processing, saving $1000 per dataset.
              </p>
              <div className="skills-used">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
          </div>
          {/* Experience 2: Software Engineer Intern at Building-U */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Apr 2024 – Aug 2024</div>
            <div className="timeline-content">
              <h5 className="experience-title">Software Engineer Intern</h5>
              <h6 className="experience-subtitle">Building-U</h6>
              <p>
                Designed 6+ dynamic wireframes for the new company website using HTML, CSS, and JavaScript. Transformed wireframes 
                into React components, improving site responsiveness by 25%. Collaborated with a multidisciplinary team in agile development.
              </p>
              <div className="skills-used">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Agile</span>
              </div>
            </div>
          </div>
          {/* Experience 3: Software Developer Intern at Visual Narrative Initiative */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">May 2023 – Oct 2023</div>
            <div className="timeline-content">
              <h5 className="experience-title">Software Developer Intern</h5>
              <h6 className="experience-subtitle">Visual Narrative Initiative @ NCSU</h6>
              <p>
                Developed a visual narrative storytelling app in p5.js and Java. Applied computer vision techniques 
                using OpenCV to create 2D animations, providing an immersive experience for 50+ users. Developed AR visualizations in Unity.
              </p>
              <div className="skills-used">
                <span className="skill-tag">p5.js</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Processing</span>
                <span className="skill-tag">Unity</span>
              </div>
            </div>
          </div>
          {/* Experience 4: NCCU */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Apr 2023 – Sep 2023</div>
            <div className="timeline-content">
              <h5 className="experience-title">Technical Research Project Assistant</h5>
              <h6 className="experience-subtitle">North Carolina Central University</h6>
              <p>
                Worked alongside Dr. Jim Harper to collect and preprocess historical data on 800+ Omega Psi Phi Fraternity (OPPF) chapters nationwide.
                Developed a historical visualizer tool with Angular, Bootstrap CSS, and MapBox API, to promote 
              </p>
              <div className="skills-used">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">Bootstrap CSS</span>
                <span className="skill-tag">MapBox API</span>
              </div>
            </div>
          </div>
          {/* Experience 5: Cisco */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">Jul 2022 – Aug 2022</div>
            <div className="timeline-content">
              <h5 className="experience-title">Global STEM Shadowee / Extern</h5>
              <h6 className="experience-subtitle">Cisco</h6>
              <p>
                Shadowed Cisco software engineer on daily tasks, and assisted in the development of a network package capturing tool.
                Competed in Cisco Hackathon, creating a Java application to help meeting scheduling in hybrid work environments.
              </p>
              <div className="skills-used">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
