import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EditableProject from "./EditableProject";
import EditIcon from "@material-ui/icons/Edit";
import { Cancel, Delete, Save } from "@material-ui/icons";

export default function Project({ project, setProject, deleteProject }) {
  const [edit, setEdit] = useState(false);
  const [editableProject, setEditableProject] = useState(null);

  useEffect(() => {
    setEditableProject(project);
  }, [edit, project]);

  return (
    project && (
      <Card className="project-card" variant="outlined">
        {!edit && (
          <>
            <CardContent>
              <Typography variant="h4" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body" component="p">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href={project.linkUrl}
                variant="contained"
                color="primary"
              >
                {project.linkName}
              </Button>
              <IconButton
                onClick={() => {
                  setEdit(true);
                }}
              >
                <EditIcon></EditIcon>
              </IconButton>
            </CardActions>
          </>
        )}
        {edit && (
          <>
            <CardContent>
              <EditableProject
                editableProject={editableProject}
                setEditableProject={setEditableProject}
              ></EditableProject>
            </CardContent>
            <CardActions>
              <IconButton
                onClick={() => {
                  setEdit(false);
                }}
              >
                <Cancel></Cancel>
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log(editableProject);
                  setProject(editableProject);
                  setEdit(false);
                }}
              >
                <Save></Save>
              </IconButton>
              <IconButton onClick={deleteProject}>
                <Delete></Delete>
              </IconButton>
            </CardActions>
          </>
        )}
      </Card>
    )
  );
}
