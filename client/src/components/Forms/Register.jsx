import React, { useState, useEffect } from "react";
import axios from "axios";
import { TfiFacebook, TfiGoogle, TfiLinkedin } from "react-icons/tfi";
import e from "express";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    if(password !== confirm) {
      setPassword("")
      setConfirm("")
      setTimeout(() => {
        setError("")
      }, 5000)
      return setError("Passwords do not match")
    }
  }

  return (
    <>
      <form onSubmit={registerHandler}>
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
        <input
          value={username}
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirm}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Register;
