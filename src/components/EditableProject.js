import { TextField } from "@material-ui/core";
import React from "react";
import "./styles.css";

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
        <div className="editable-project-wrapper">
          <TextField
            className="text-input"
            variant="outlined"
            label="Title"
            name="title"
            value={editableProject.title}
            onChange={handleChange}
          />
          <TextField
            className="text-input"
            variant="outlined"
            label="Description"
            name="description"
            value={editableProject.description}
            onChange={handleChange}
            multiline
          />
          <TextField
            className="text-input"
            variant="outlined"
            label="Link Name"
            name="linkName"
            value={editableProject.linkName}
            onChange={handleChange}
          />
          <TextField
            className="text-input"
            variant="outlined"
            label="Link Url"
            name="linkUrl"
            value={editableProject.linkUrl}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}
