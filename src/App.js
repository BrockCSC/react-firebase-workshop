import { Container } from "@material-ui/core";
import React, { useState } from "react";
import AddProject from "./components/AddProject";
import Nav from "./components/Nav";
import Project from "./components/Project";
import "./components/styles.css";

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

  return (
    <div class="app-root">
      <Nav></Nav>
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
