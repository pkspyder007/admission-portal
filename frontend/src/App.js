import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [currentValidation, setCurrentValidation] = useState(false);
  const [currentState, setCurrentState] = useState(true);

  function changeHere() {
    setCurrentState(!currentState);
  }
  function changeValidation() {
    setCurrentValidation(!currentValidation);
  }
  return (
    <Router>
      <Route exact path="/">{currentState ? (<Login currentView={changeHere} />) :(<Sign currentView={changeHere} currentLogin={changeValidation} />)}{" "}</Route>
      <ProtectedRoute path="/dashboard" component= {<Dashboard currentLogin={changeValidation}/>} isAuth={currentValidation}/>
    </Router>
  );
}

export default App;
