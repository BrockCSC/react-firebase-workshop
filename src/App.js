import React from "react";

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
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.links.map((link) => (
            <a href={link.url}>{link.name}</a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
