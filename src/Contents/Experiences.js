import React from 'react';
import Experience from '../Components/Experience';

function Experiences() {
  const experienceList = [
    {
      year: "2024(Dec)- 2025(Oct)",
      role: "Mobile Application Developer",
      company: "Satyukt Analytics",
      description: "Developing mobile applications with the Flutter framework, creating cross-platform solutions with seamless API integration.",
      skills: ['Flutter', 'Dart', 'Firebase']
    },
    {
      year: "2023(Jun-Nov)",
      role: "Flutter Intern",
      company: "Blackdot Innovations",
      description: "Worked on developing cross-platform Flutter applications with the integration of machine learning models.",
      skills: ['Flutter','Firebase','Machine Learning']
    }
  ];

  return (
    <div className="experiences">
      <h2>Experience</h2>
      {experienceList.map((exp, index) => (
        <Experience
          key={index}
          year={exp.year}
          role={exp.role}
          company={exp.company}
          description={exp.description}
          skills={exp.skills}
        />
      ))}
    </div>
  );
}

export default Experiences;