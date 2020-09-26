import React from "react";
import Project from "./components/Project";

function App() {
  const projects = [
    {
      title: "My cool project 1",
      description: "I did a lot of nice things with this project",
      links: [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io",
        },
      ],
    },
    {
      title: "My cool project 2",
      description: "I did a lot of nice things with this project",
      links: [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io",
        },
      ],
    },
    {
      title: "My cool project 3",
      description: "I did a lot of nice things with this project",
      links: [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io",
        },
      ],
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <Project project={project}></Project>
      ))}
    </div>
  );
}

export default App;
