import React from 'react';

export default function Project({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.links.map((link) => (
        <a href={link.url}>{link.name}</a>
      ))}
    </div>
  );
}