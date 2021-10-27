import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import  './dashboard.css';
function Dashboard(props){
    function logout(){
            props.currentLogin();
    }
    return(
       
        <>
        <div className="dashboard-con">
        <Sidebar />
        <Content />
        {/* <h1 onClick={logout}>Logout</h1> */}
        </div>
        
       

        </>
    )
}


export default Dashboard;
