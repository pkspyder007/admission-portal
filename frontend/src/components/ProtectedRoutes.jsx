import React, {useState,useEffect} from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
function ProtectedRoutes({children, ...rest}){
    const[loginValidation,setLoginValidation]=useState(false);
    useEffect(()=>{
       
        
            let Signin = {
                    
              email: Cookies.get('email'),
              password: Cookies.get('password')
              
              
          }
          
            
              axios.post('http://localhost:4000/regiss/signin',Signin).then(function(response){
                  if(response.data.login===true){
                    
                      setLoginValidation(true);
                      console.log(loginValidation);
                      alert(response.data.login);
                      
                  }else{
                      
                    setLoginValidation(false);
                    console.log(response.data.login);
                   
                  }
              }).catch(function (error) {
                  console.log(error);
              });
              Signin={
                email:"",
                password:""
              }
          
        
    },[]);
 
  return(
      <Route {...rest}
      
      render={({location})=>
        (loginValidation)?(children):(
            <Redirect
            to={{
                pathname: "/",
                state:{from:location},
            }}
            />
        )
    }
    />
     
  )


}

export default ProtectedRoutes;