import React, { useState } from "react";
import AddProject from "../components/AddProject";
import Project from "../components/Project";
import "../components/styles.css";

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

export default function Home({ user, projects, updateProject, deleteProject }) {
  // const [projects, setProjects] = useState(mockProjects);

  return (
    <>
      {projects &&
        projects.map((project) => (
          <Project
            project={project}
            key={`project_${project.id}`}
            setProject={(newProject) => {
              updateProject(newProject.id, newProject);
              // setProjects((prevProjects) => ({
              //   ...prevProjects,
              //   [project.id]: newProject,
              // }));
            }}
            deleteProject={deleteProject}
            user={user}
          ></Project>
        ))}
      {user && (
        <AddProject
          addProject={(newProject) => {
            updateProject(newProject.id, newProject);
            // setProjects((prevProjects) => ({
            //   ...prevProjects,
            //   [newProject.id]: newProject,
            // }));
          }}
        ></AddProject>
      )}
    </>
  );
}
