import React,{useState,useEffect} from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from 'react-router-dom';
import Login from './pages/Login';
 import Register from './pages/Register'
 import Dashboard from './pages/dasboard';
 import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
 
  return (
     <Router>
       <Route exact path="/"><Login /></Route>
       <ProtectedRoutes path="/dashboard" exact>
         <Dashboard />
       </ProtectedRoutes> 
       <Route exact path="/register"> <Register /> </Route>
     </Router>
    
   
  )
}

export default App
