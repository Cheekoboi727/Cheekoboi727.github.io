import React from "react";
import projects from "../../data/projects.js"; // Update the path as necessary

function Project() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 mx-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="pb-5 border-2 px-1 py-1 border-gray-400 bg-gray-300 rounded-b-xl mb-28 md:mb-0"
          >
            <div className="">
              <img src={project.picture} alt={project.name} />
            </div>
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h1 className="text-center text-2xl">{project.name}</h1>
              </a>
            </div>
            <div className="text-center text-sm md:text-base mt-3">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
