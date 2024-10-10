import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaAws, FaReact, FaGitAlt, FaDocker, FaJs, FaDatabase } from 'react-icons/fa';
import { SiSwift, SiTypescript, SiFlask, SiSelenium, SiPandas, SiNumpy, SiTensorflow, SiSpringboot, SiAngular, SiFirebase, SiLangchain } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaJava size={32} />, name: 'Java' },
    { icon: <FaPython size={32} />, name: 'Python' },
    { icon: <SiSwift size={32} />, name: 'Swift/SwiftUI' },
    { icon: <FaJs size={32} />, name: 'JavaScript' },
    { icon: <SiTypescript size={32} />, name: 'TypeScript' },
    { icon: <FaHtml5 size={32} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={32} />, name: 'CSS3' },
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
    { icon: <SiSelenium size={32} />, name: 'Selenium' }
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      date: 'Jun 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/QHX4DTRQVD5H',
    },
    {
      name: 'SAS Certified Associate: Programming Fundamentals Using SAS 9.4',
      date: 'Jan 2023',
      link: 'https://www.credly.com/badges/aae62481-fb0b-4bba-ad60-9b4439a3f779/linked_in_profile',
    },
    {
      name: 'Microsoft Office Specialist: Associate (Office 2019)',
      date: 'May 2021',
      link: 'https://www.credly.com/badges/40d8c74c-69df-460e-8a52-f8427c5be0a9/linked_in_profile',
    },
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

        <h3 className="text-center mt-5 mb-3">Certifications</h3>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item mb-3">
             <strong>{cert.name}</strong> - <a href={cert.link} target='blank'><strong><span className="gautam">{cert.date}</span></strong></a> <br />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
