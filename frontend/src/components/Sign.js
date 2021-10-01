import React from "react";
import signup from '../images/signup-image.jpg'
function Sign(props) {
  function change(e) {
      e.preventDefault();
    props.currentView();
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
              <form onSubmit={this.onSubmit} className="register-form" id="login-form">
              <div className="form-group">
                                <label for="email"><i classNameName="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                <div className="form-group">
                  <label for="your_pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
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
