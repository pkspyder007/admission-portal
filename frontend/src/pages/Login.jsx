import React, {useEffect,useState} from 'react';

import axios from 'axios';
import { notification } from 'antd';
import loginsvg from '../images/undraw_secure_login_pdn4.svg'
function Login(props) {
    useEffect(()=>{
      let Signin = {
            
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
        
    }
        axios.post('http://localhost:4000/regiss/signin',Signin).then(function(response){
            if(response.data.login){
                props.history.push("/");
            }else{
                notification["error"]({
                    message:"Please Login to continue",
                    description:"You have been logout. Please Login again"
                })
            }
        }).catch(function (error) {
            console.log(error);
        });
        
    })
    const [dsignin, newSignin] = useState({
    
        email: "",
        pass: "",
        agreeterm: false
    });
    function handelChange(event) {
        const { name, value } = event.target;
    
    
        newSignin((prevValue) => {
            if (name !== "agreeterm")
                return {
                    ...prevValue,
                    [name]: value
                }
            else {
                return {
                    ...prevValue,
                    [name]: !prevValue.agreeterm
                }
            }
        });
    }
    function handelSubmit(event) {
        const Signin = {
            
            email: dsignin.email,
            password: dsignin.pass
            
        }
        
         axios.post('http://localhost:4000/regiss/signin', Signin).then(function (response) {
             
            if(response.data.login===true){
              console.log("ok");
              localStorage.setItem('password', response.data.password);
              localStorage.setItem('email', response.data.email);
              props.history.push('/');
              
            }else if(response.data.verification===false){
                notification["error"]({
                    message:"Email Verifcation",
                    content:"Please verify your mail. Don't forgot to check in spam. For furthur quries contact adminstration."
                })
            
              
            }
            else{
                notification["error"]({
                    message:"Incorrect creditential",
                    content:""
                })
            
              
            }
             return response.data;
         }).catch(function (error) {
                 console.log(error);
             });
      
      
      
        newSignin(() => {
            return {
                
                email: "",
                pass: "",
            
                agreeterm: false
            }
        })
        event.preventDefault();
      }

  return (
    <>
   <section className="sign-in">
      
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginsvg} alt="" />
              </figure>
              <a href="#"  className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handelSubmit} className="register-form" id="login-form">
              <div className="form-group">
              <label for="email"><i className="zmdi zmdi-email"></i></label>
              <input onChange={handelChange} type="email" value={dsignin.email}  name="email" id="email" placeholder="Your Email"/>
              </div>
                <div className="form-group">
                  <label for="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    onChange={handelChange}
                    type="password"
                    value={dsignin.pass}
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  );
}

export default Login
