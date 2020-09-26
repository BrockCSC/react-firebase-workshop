import React, { useState } from "react";
import EditableProject from "./EditableProject";
import { v4 as uuid } from "uuid";
import { EMPTY_PROJECT } from "../util";
import { Button, Typography } from "@material-ui/core";
import "./styles.css";

export default function AddProject({ addProject }) {
  const [project, setProject] = useState(EMPTY_PROJECT);
  return (
    <>
      <Typography variant="h5" component="h5">
        Add Project
      </Typography>
      <EditableProject
        editableProject={project}
        setEditableProject={setProject}
      ></EditableProject>
      <Button
        className="add-project-button"
        variant="contained"
        color="secondary"
        onClick={() => {
          addProject({ id: uuid(), ...project });
          setProject(EMPTY_PROJECT);
        }}
      >
        Add Project
      </Button>
    </>
  );
}
