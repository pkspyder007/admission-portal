import React, { useState } from "react";
import axios from 'axios';
import signup from '../images/signup-image.jpg'
import {Redirect} from "react-router-dom";

function Sign(props) {
  const [href,setHref]= useState("/")
  const [dsignin, newSignin] = useState({
    
    email: "",
    pass: "",
    agreeterm: false
});
  function change(e) {
      e.preventDefault();
    props.currentView();
  }
  
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
       
      if(response.data.login==='true'){
        console.log("ok");
        props.currentLogin();
        setHref("/dashboard");
        
      }else if(response.data.verification==='false'){
        alert("Please verify your email")
      }
      else{
        alert("Incorrect creditential")
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
                <img src={signup} alt="" />
              </figure>
              <a href="#" onClick={change} className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handelSubmit} href={href} className="register-form" id="login-form">
              <div className="form-group">
              <label for="email"><i className="zmdi zmdi-email"></i></label>
              <input onChange={handelChange} type="email"value={dsignin.email} name="email" id="email" placeholder="Your Email"/>
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
                <div className="form-group">
                  <input
                    onChange={handelChange}
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    value={dsignin.agreeterm}
                    className="agree-term"
                  />
                  <label for="remember-me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Remember me
                  </label>
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

export default Sign;
