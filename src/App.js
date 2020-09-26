import { Container } from "@material-ui/core";
import React from "react";
import Nav from "./components/Nav";
import "./components/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

// firebase stuff

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa6HO1PpYHyZg_-9oTa3wJnZoFv2U24TI",
  authDomain: "react-firebase-workshop-e9052.firebaseapp.com",
  databaseURL: "https://react-firebase-workshop-e9052.firebaseio.com",
  projectId: "react-firebase-workshop-e9052",
  storageBucket: "react-firebase-workshop-e9052.appspot.com",
  messagingSenderId: "116076631573",
  appId: "1:116076631573:web:de305310206a861c69a01c",
  measurementId: "G-EQ4PSZR7QP",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const logout = () => {
    auth.signOut();
  };

  const projectsRef = firestore.collection("projects");

  const [projects] = useCollectionData(projectsRef);

  const updateProject = (id, project) => {
    projectsRef.doc(id).set(project);
  }

  const deleteProject = (id) => {
    projectsRef.doc(id).delete();
  }

  return (
    <div className="app-root">
      <Router>
        <Nav user={user} logout={logout}></Nav>
        <Container>
          <Switch>
            <Route path="/login">
              <Login login={signInWithGoogle} user={user}></Login>
            </Route>
            <Route path="/">
              <Home user={user} projects={projects} updateProject={updateProject} deleteProject={deleteProject}></Home>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
