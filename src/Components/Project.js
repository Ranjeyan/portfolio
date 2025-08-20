import React from 'react';
import PropTypes from 'prop-types';
import { Link ,useNavigate} from 'react-router-dom';
import '../Styles/Project.css';

function Project({ year, image, title, description, tools, link }) {
  const navigate = useNavigate(); 

  const handleClick = (e) => {
    if (link === "/billionaire_analysis") {
      e.preventDefault();
      navigate("/project/billionaire_analysis"); 
    }
  };

  return (
    <div className="project-item">
      <div className="project-left">
        <p className="project-year">{year}</p>
      </div>
      <div className="project-right">
        <img src={image} alt="Project" className="project-image" />
        <div className="project-details">
          <h3>
            {link.startsWith('/') ? (
              <>
                <Link to={link} className="project-title-link" onClick={handleClick}>
                  <span className="project-title-text">{title}</span>
                </Link>
                <span className="arrow">↗</span>
              </>
            ) : (
              <>
                <a
                  href={link}
                  className="project-title-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project-title-text">{title}</span>
                </a>
                <span className="arrow">↗</span>
              </>
            )}
          </h3>
          <p className="project-description">{description}</p>
          <p className="project-tools">
            {tools.map((tool, index) => (
              <React.Fragment key={tool}>
                {tool}
                {index < tools.length - 1 && <span className="tool-dot">·</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  year: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
