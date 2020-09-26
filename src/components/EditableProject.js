import React from "react";

export default function EditableProject({
  editableProject,
  setEditableProject,
}) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditableProject((prevSnap) => ({
      ...prevSnap,
      [name]: value,
    }));
  };

  return (
    <>
      {editableProject && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="title"
            value={editableProject.title}
            onChange={handleChange}
          />
          <input
            type="textarea"
            name="description"
            value={editableProject.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkName"
            value={editableProject.linkName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkUrl"
            value={editableProject.linkUrl}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}
