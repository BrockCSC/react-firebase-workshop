import React, { useEffect, useState } from "react";
import EditableProject from "./EditableProject";

export default function Project({ project, setProject, deleteProject}) {
  const [edit, setEdit] = useState(false);
  const [editableProject, setEditableProject] = useState(null);

  useEffect(() => {
    setEditableProject(project);
  }, [edit, project]);

  return ( project &&
    <div>
      {!edit && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <a href={project.linkUrl}>{project.linkName}</a>
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
        </>
      )}
      {edit && (
        <>
          <EditableProject
            editableProject={editableProject}
            setEditableProject={setEditableProject}
          ></EditableProject>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log(editableProject);
              setProject(editableProject);
              setEdit(false);
            }}
          >
            Save
          </button>
          <button
            onClick={deleteProject}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
