import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaAws, FaReact, FaGitAlt, FaDocker, FaJs, FaDatabase } from 'react-icons/fa';
import { SiSwift, SiTypescript, SiFlask, SiSelenium, SiPandas, SiNumpy, SiMatplotlib, SiSpringboot, SiAngular, SiFirebase, SiTensorflow, SiLangchain } from 'react-icons/si';
// import { DiC, DiIntellij, DiXcode } from 'react-icons/di';

function Skills() {
  const skills = [
    { icon: <FaJava size={32} />, name: 'Java' },
    { icon: <FaPython size={32} />, name: 'Python' },
    // { icon: <DiC size={32} />, name: 'C' },
    { icon: <SiSwift size={32} />, name: 'Swift/SwiftUI' },
    { icon: <FaJs size={32} />, name: 'JavaScript' },
    { icon: <SiTypescript size={32} />, name: 'TypeScript' },
    { icon: <FaHtml5 size={32} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={32} />, name: 'CSS3' },
    // { icon: <SiSas size={32} />, name: 'SAS' },
    { icon: <FaDatabase size={32} />, name: 'SQL' },
    { icon: <FaReact size={32} />, name: 'React' },
    { icon: <SiAngular size={32} />, name: 'Angular' },
    { icon: <SiFlask size={32} />, name: 'Flask' },
    { icon: <SiTensorflow size={32} />, name: 'TensorFlow' },
    { icon: <SiLangchain size={32} />, name: 'Langchain' },
    { icon: <SiSpringboot size={32} />, name: 'SpringBoot' },
    { icon: <FaGitAlt size={32} />, name: 'Git' },
    { icon: <FaAws size={32} />, name: 'Amazon Web Services' },
    { icon: <SiFirebase size={32} />, name: 'Firebase' },
    { icon: <FaDocker size={32} />, name: 'Docker' },
    { icon: <SiPandas size={32} />, name: 'pandas' },
    { icon: <SiNumpy size={32} />, name: 'NumPy' },
    // { icon: <SiMatplotlib size={32} />, name: 'Matplotlib' },
    { icon: <SiSelenium size={32} />, name: 'Selenium' },
    // { icon: <SiBeautifulsoup size={32} />, name: 'BeautifulSoup' },
    // { icon: <SiScikitlearn size={32} />, name: 'scikit-learn' },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
