import React from "react";

export default function Project({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.linkUrl}>{project.linkName}</a>
    </div>
  );
}
