import React, { useState } from 'react';
import axios from 'axios';
import signin from '../images/signin-image.jpg'

function Login(props) {
    const [dsignup, newSignup] = useState({
        jeeroll: "",
        email: "",
        pass: "",
        repass: "",
        agreeterm: false
    });
    function handelChange(event) {
        const { name, value } = event.target;
        

        newSignup((prevValue) => {
            if(name!=="agreeterm")
          return {
              ...prevValue,
              [name]:value 
          }  
          else {
              return{
                  ...prevValue,
                  [name]: !prevValue.agreeterm
              }
          }
        });
    }
    function handelSubmit(event){
        const Reg ={
            jeeroll: dsignup.jeeroll ,
            email: dsignup.email ,
            password: dsignup.pass, 
            repassword : dsignup.repass
        }
        axios.post('http://localhost:4000/regiss/singup', Reg);
        console.log(Reg);
        
        newSignup(()=>{
            return {
            jeeroll: "",
            email: "",
            pass: "",
            repass: "",
            agreeterm: false
            }
            })
        event.preventDefault();
    }

    function change(e) {
        e.preventDefault();
        props.currentView();
    }
    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={handelSubmit} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label for="jeeroll"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input required value={dsignup.jeeroll} onChange={handelChange}
                                        type = "text" name="jeeroll" id="jeeroll" placeholder="Your JEE Roll" />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input required value={dsignup.email} onChange={handelChange} type="email" name="email" id="email"  placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input required value={dsignup.pass} onChange={handelChange} type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="repass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input required value={dsignup.repass} onChange={handelChange} type="password" name="repass" id="repass" placeholder="Repeat your password" />
                                </div>
                                <div className="form-group">
                                    <input required value={dsignup.agreeterm} onChange={handelChange} type="checkbox" name="agreeterm" id="agreeterm" className="agree-term" />
                                    <label for="agreeterm" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signin} alt="sing up image" /></figure>
                            <a href="#" onClick={change} className="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Login;
