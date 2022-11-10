import React from "react";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";

const Login = () => {
  return (
    <>
      <form action="#">
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a>Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
