import React ,{useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Sign from './components/Sign';

function App() {
  const [currentState, setCurrentState] = useState(true);

  function changeHere(){
    
    setCurrentState(!currentState);
  }
  
  return (
    <Router>
    {currentState?<Login currentView={changeHere} />:<Sign currentView={changeHere} />}
    </Router>
   
  );
}


export default App;
