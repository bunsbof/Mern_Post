import React from "react";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";

const Register = () => {
  return (
    <>
      <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a className="social">
                <TfiFacebook />
              </a>
              <a className="social">
                <TfiGoogle />
              </a>
              <a className="social">
                <TfiLinkedin />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
    </>
  );
};

export default Register;
