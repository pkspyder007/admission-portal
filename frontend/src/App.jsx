import React from 'react';
import './css/style.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import Dashboard from './pages/dasboard';
function App() {
 

  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/" exact={true} component={Index} />
          
          {/* <Route path="/register" exact={true} component={Register} /> */}
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route  component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
