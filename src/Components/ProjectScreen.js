import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectScreen() {
  const { projectId } = useParams();

  const renderProjectDetails = () => {
    switch (projectId) {
      case 'portfolio':
        return (
          <div>
            <h1>Portfolio Website</h1>
            <p>This is my personal portfolio project.</p>
          </div>
        );
      case 'euro2024':
        return (
          <div>
            <h1>Euro 2024 Insights</h1>
            <p>This project focuses on providing insights for the Euro 2024 tournament.</p>
          </div>
        );
        case "Billionaires":
          return (
            <div>
              <h1>Analysis</h1>
              <p>This project is focused on interactive visualizations using D3.js.</p>
            </div>
          );
      default:
        return <p>Project not found.</p>;
    }
  };

  return (
    <div>
      {renderProjectDetails()}
    </div>
  );
}

export default ProjectScreen;
