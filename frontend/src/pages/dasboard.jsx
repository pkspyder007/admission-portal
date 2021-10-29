import React,{useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbars from '../components/Navbar';

function Dashboard(props){
  
  
  useEffect(()=>{
    let Signin = {
          
      email: Cookies.get('email'),
      password: Cookies.get('password')
      
      
  }

    
      axios.post('http://localhost:4000/regiss/signin',Signin).then(function(response){
          if(response.data.login===true){
            
              
              
          }else{
            props.history.push("/");
          }
      }).catch(function (error) {
          console.log(error);
      });
      Signin={
        email:"",
        password:""
      }
      
  },[])
  
    return(
        <>
        <Navbars />
        
      
        </>
    )
}
export default Dashboard;