import React, { useState } from "react";
import EditableProject from "./EditableProject";
import { v4 as uuid } from "uuid";
import { EMPTY_PROJECT } from "../util";

export default function AddProject({ addProject }) {
  const [project, setProject] = useState(EMPTY_PROJECT);
  return (
    <>
      Add Project
      <EditableProject
        editableProject={project}
        setEditableProject={setProject}
      ></EditableProject>
      <button
        onClick={() => {
          addProject({ id: uuid(), ...project });
          setProject(EMPTY_PROJECT);
        }}
      >
        Add Project
      </button>
    </>
  );
}
