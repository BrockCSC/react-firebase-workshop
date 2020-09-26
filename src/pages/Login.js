import { Button } from "@material-ui/core";
import React from "react";

export default function Login({ login, user }) {
  return (
    <div>
      {!user && (
        <Button
          variant="contained"
          color="primary"
          className="app-button"
          onClick={login}
        >
          Login
        </Button>
      )}
      {user && (
        <div className="app-button">Already logged in {user.displayName} </div>
      )}
    </div>
  );
}
