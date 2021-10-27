import React from "react";
import "./Sidebar.css";
import {FaAngular} from "react-icons/fa"
function Sidebar(props){
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <div className="sidebar-item-icon"><FaAngular/></div>
       <h6 className="sidebar-heading">Admission Portal</h6>
      </div>
      <div className="sidebar-items">
        ok
      </div>
      <div className="sidebar-items">
        ok
      </div>
      <div className="sidebar-items">
        ok
      </div>
      
    </div>
  );
};

export default Sidebar;