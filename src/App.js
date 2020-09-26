import React, { useState } from "react";
import AddProject from "./components/AddProject";
import Project from "./components/Project";

const mockProjects = {
  p1: {
    id: "p1",
    title: "My cool project 1",
    description: "I did a lot of nice things with this project",
    linkName: "GitHub",
    linkUrl: "https://www.github.com/brockcsc/brockcsc.github.io",
  },
  p2: {
    id: "p2",
    title: "My cool project 2",
    description: "I did a lot of nice things with this project",
    linkName: "GitHub",
    linkUrl: "https://www.github.com/brockcsc/brockcsc.github.io",
  },
  p3: {
    id: "p3",
    title: "My cool project 3",
    description: "I did a lot of nice things with this project",
    linkName: "GitHub",
    linkUrl: "https://www.github.com/brockcsc/brockcsc.github.io",
  },
};

function App() {
  const [projects, setProjects] = useState(mockProjects);

  const [num, setNum] = useState(0);

  return (
    <div>
      {Object.values(projects).map((project) => (
        <Project
          project={project}
          key={`project_${project.id}`}
          setProject={(newProject) => {
            setProjects((prevProjects) => ({
              ...prevProjects,
              [project.id]: newProject,
            }));
          }}
          deleteProject={() => {
            setProjects((prevProjects) => {
              const newProjects = { ...prevProjects };
              delete newProjects[project.id];
              console.log(newProjects);
              return newProjects;
            });
          }}
        ></Project>
      ))}
      <AddProject
        addProject={(newProject) => {
          setProjects((prevProjects) => ({
            ...prevProjects,
            [newProject.id]: newProject,
          }));
        }}
      ></AddProject>
    </div>
  );
}

export default App;
