import React, {useState} from "react";
import "./App.css";

const defaultProjects = [
  {
    name: "Project 1",
    desc: "Cool projecasdfsadft",
    linkName: "GitHub",
    linkUrl: "https://www.github.com",
  },
  {
    name: "Project 2",
    desc: "Cool project 2",
    linkName: "GitHub",
    linkUrl: "https://www.github.com",
  },
];

/// Structure for a project: name, description, linkName, linkUrl
const project = {
  name: "Project 1",
  description: "Cool project",
  linkName: "GitHub",
  linkUrl: "https://www.github.com",
};


function Project(props) {
  return (
    <div>
      <h1>{props.proj.name}</h1>
      <p>{props.proj.desc}</p>
      <a href={props.proj.linkUrl}>{props.proj.linkName}</a>
    </div>
  );
}

function App() {
  const [projects, setProjects] = useState(defaultProjects);

  const doSomething = () => {
    // Create a copy of the original list of projects
    let newProjects = [...projects];
    // Add a new project to the list
    newProjects.push(project);
    // Sets our projects state to the new list of projects, triggers change detection
    setProjects(newProjects);
  } 

  return (
    <div>
      <button onClick={doSomething}>Add project</button>
      {projects.map((project) => {
        return <Project proj={project}></Project>;
      })}
    </div>
  );
}

export default App;
