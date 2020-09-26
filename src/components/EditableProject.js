import React, { useEffect, useState } from "react";

function deepCopyProject(project) {
  // Assume it's implemented better than this for now
  return JSON.parse(JSON.stringify(project));
}

export default function EditableProject({
  project,
  setProject,
  deleteProject,
}) {
  const [projectSnap, setProjectSnap] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setProjectSnap(deepCopyProject(project));
  }, [project, edit]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProjectSnap((prevSnap) => ({
      ...prevSnap,
      [name]: value,
    }));
  };

  return (
    <>
      {!edit && <button onClick={() => setEdit((prev) => !prev)}>Edit</button>}
      {edit && projectSnap && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {JSON.stringify(project)}
          <input
            type="text"
            name="title"
            value={projectSnap.title}
            onChange={handleChange}
          />
          <input
            type="textarea"
            name="description"
            value={projectSnap.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkName"
            value={projectSnap.linkName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkUrl"
            value={projectSnap.linkUrl}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              setProject(projectSnap);
              setEdit(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
          <button onClick={deleteProject}>Delete</button>
        </div>
      )}
    </>
  );
}
