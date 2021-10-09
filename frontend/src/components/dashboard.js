import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
function Dashboard(props){
    function logout(){
            props.currentLogin();
    }
    return(
       
        <>
        <Sidebar />
        <h1 onClick={logout}>Logout</h1>

        </>
    )
}


export default Dashboard;
