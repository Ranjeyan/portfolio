// Experience.js
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Experience.css';

function Experience({ year, role, company, description, skills }) {
  return (
    <div className="experience-item">
      <div className="experience-left">
        <p className="experience-year">{year}</p>
      </div>
      <div className="experience-right">
        <div className="experience-details">
          <h3 className="experience-role">{role}</h3>
          <h4 className="experience-company">{company}</h4>
          <p className="experience-description">{description}</p>
          <p className="experience-skills">
            {skills && skills.map((skill, index) => (
              <React.Fragment key={index}>
                {skill}
                {index < skills.length - 1 && <span className="skill-dot">·</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  year: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;