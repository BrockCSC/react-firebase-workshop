import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import './styles.css';

export default function Nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar  className="nav-root">
          <Typography variant="h6">
            Portfolio
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
