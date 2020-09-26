import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import "./styles.css";

export default function Nav({ logout, user }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="nav-root">
          <Typography variant="h6">Portfolio</Typography>
          {user && <Button color="inherit" onClick={logout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </>
  );
}
