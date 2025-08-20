import React from 'react';
import '../Styles/Header.css'; 
import Logo from '../assets/R.png';
import Resume from '../assets/RANJEYAN.pdf'; 

function Header() {
  return (
    <header className="header">
      <a href='/' className='logo-link'>
      <img src={Logo} alt="Logo" className="logo" />

      </a>

      <a href={Resume} className="button" download="Resume.pdf">
        <span className="button-text">Resume</span>
        <span className="arrow">↗</span>
      </a>
    </header>
  );
}

export default Header;
