// Hero.js
import React from 'react';
import '../Styles/Hero.css';
import Ranjeyan from '../assets/profile-pic.jpg';
import Links from './Links';
import Projects from '../Components/Projects';
import Skills from './Skills'; 
import Experiences from '../Contents/Experiences';

function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={Ranjeyan} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="name">Ranjeyan A</h1>
          <p className="role">M.Sc., Data Science(Integrated)</p>
          <p className="link">
            <a href="mailto:ranjeyanari03@gmail.com">ranjeyanari03@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="about">
          <h2>About</h2>
          <p>
          Hey 👋 I speak fluent data! Fresh MSc Data Science graduate passionate about uncovering trends and translating them into insights that drive smarter business decisions. I love the process of exploring messy data and turning it into something clear, useful, and actionable.</p>
        </div>

        <Projects />
        <Skills />
        <Experiences /> 
        <Links />
      </div>
    </div>
  );
}

export default Hero;
