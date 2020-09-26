import React from 'react';

function App() {
  const projects = [
    {
      "title": "My cool project 1",
      "description": "I did a lot of nice things with this project",
      "links": [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io"
        }
      ]
    },
    {
      "title": "My cool project 1",
      "description": "I did a lot of nice things with this project",
      "links": [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io"
        }
      ]
    },
    {
      "title": "My cool project 1",
      "description": "I did a lot of nice things with this project",
      "links": [
        {
          name: "GitHub",
          url: "https://www.github.com/brockcsc/brockcsc.github.io"
        }
      ]
    }
  ]
  return (
    <div>
      {[<div>Nice</div>, <div>Okay</div>]}
      <div>
        <h1>Project</h1>
        <p>Description</p>
        <a href="https://www.brockcsc.ca">GitHub? Not really</a>
      </div>
      <div>
        <h1>Project 2</h1>
        <p>Description 2</p>
        <a href="https://www.brockcsc.ca">GitHub 2? Not really</a>
      </div>
    </div>
  );
}

export default App;
