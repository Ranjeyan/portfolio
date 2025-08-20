// Hero.js
import React from 'react';
import '../Styles/Hero.css';
import Ranjeyan from '../assets/profile-pic.jpg';
import Logo from '../assets/R.png';
// import ProjectImage2 from '../assets/euro.svg';
import billionaire from  "../assets/Billionaire.png";
import Links from './Links';
import Project from './Project';
import Skills from './Skills'; 
import Experiences from '../Contents/Experiences';

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={Ranjeyan} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="name">Ranjeyan A</h1>
          <p className="role">Mobile Application Developer(Flutter)</p>
          <p className="link">
            <a href="mailto:amranjeyan03@gmail.com">amranjeyan03@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="about">
          <h2>About</h2>
          <p>
          Hey👋 I speak fluent data and mobile development! Fresh MSc Data Science graduate currently crafting mobile solutions at Satyukt Analytics. I'm obsessed with finding patterns in chaos and turning them into apps that actually matter—because the best technology is the kind that seamlessly fits into your life.</p>
        </div>


        <div className="projects">
          <h2>Projects</h2>
          <Project
          year='2025'
          image={billionaire}
          title='Analysis on World Billionaires Dataset'
          description='Performed  Data Analysis on the Forbes Billionaires dataset using Python. Cleaned and visualized data with Pandas, Matplotlib, and Seaborn to uncover patterns in wealth distribution, industries, and global demographics.'
          tools={['Python (Jupyter Notebook)']}
          link='https://github.com/Ranjeyan/Analysis-on-World-Billionaires-Dataset/blob/main/Analysis%20on%20World%20Billionaires%20Dataset.ipynb'
          />
          <Project
            year="2024"
            image={Logo}
            title="Portfolio Website"
            description="A personal portfolio website to showcase my skills and projects."
            tools={['React', 'CSS', 'Javascript']}
            link="https://github.com/Ranjeyan/Portfolio"
          />
        </div> 
        <Skills />
        <Experiences /> 
        <Links />
      </div>
    </div>
  );
}

export default Hero;
