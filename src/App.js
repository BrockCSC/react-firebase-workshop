import { Container } from "@material-ui/core";
import React from "react";
import Nav from "./components/Nav";
import "./components/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div class="app-root">
      <Router>
        <Nav></Nav>
        <Container>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
