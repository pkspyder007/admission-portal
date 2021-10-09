import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from "react-router-dom";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Dashboard from "./components/dashboard";
import Cookies from "js-cookie";
function App() {

  const [currentValidation, setCurrentValidation] = useState(false);
  const [currentState, setCurrentState] = useState(true);
  function readCookie(){
  const  validation= Cookies.get("validation");
  setCurrentValidation(true);
  }  
  React.useEffect(() => {
      
        readCookie();
      
      
    }, [])
  
  function changeHere() {
    setCurrentState(!currentState);
  }
  
  function changeValidation() {
    
    setCurrentValidation(true);
   
      Cookies.set('validation', true , {expires: 7});
    
   
    
   
  }
  function removeValidation(){
    setCurrentValidation(false);
    Cookies.remove('validation');
  }
  return (
    <Router>
      <Route exact path="/">{currentValidation?<Redirect to="/dashboard" />:currentState ? (<Login currentView={changeHere} />) :(<Sign currentView={changeHere} currentLogin={changeValidation} />)}{" "}</Route>
      <Route path="/dashboard">{currentValidation?<Dashboard currentLogin={removeValidation}/>:<Redirect to="/" />}</Route>
    </Router>
  );
}

export default App;
