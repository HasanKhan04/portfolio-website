import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 2 },
    { name: "Flask / Django", progress: 100, className: "", years: 2 },
    { name: "PostgreSQL / MySQL", progress: 100, className: "postgre-progress", years: 2 },
    { name: "Spring Boot", progress: 50, className: "springboot-progress", years: 1 },
    { name: "VueJS", progress: 50, className: "react-progress", years: 1 },
    { name: "Nodejs / Expressjs", progress: 50, className: "node-progress", years: 1 },
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;