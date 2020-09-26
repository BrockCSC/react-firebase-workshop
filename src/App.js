import React, { useState } from "react";
import Project from "./components/Project";

const mockProjects = {
  p1: {
    id: "p1",
    title: "My cool project 1",
    description: "I did a lot of nice things with this project",
    links: [
      {
        name: "GitHub",
        url: "https://www.github.com/brockcsc/brockcsc.github.io",
      },
    ],
  },
  p2: {
    id: "p2",
    title: "My cool project 2",
    description: "I did a lot of nice things with this project",
    links: [
      {
        name: "GitHub",
        url: "https://www.github.com/brockcsc/brockcsc.github.io",
      },
    ],
  },
  p3: {
    id: "p3",
    title: "My cool project 3",
    description: "I did a lot of nice things with this project",
    links: [
      {
        name: "GitHub",
        url: "https://www.github.com/brockcsc/brockcsc.github.io",
      },
    ],
  },
};

function App() {
  const [projects, setProjects] = useState(mockProjects);

  const [num, setNum] = useState(0);

  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum((num) => num + 1);
        }}
      >
        Do stuff
      </button>
      {Object.values(projects).map((project) => (
        <Project project={project}></Project>
      ))}
    </div>
  );
}

export default App;
