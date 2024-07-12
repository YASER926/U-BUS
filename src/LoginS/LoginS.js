import React from "react";
import "./LoginS.css";
import Logop from "./logo.png";
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function LoginS() {
  return (
    <div>
      <div class="background"></div>
      <div class="card">
        <img class="logo" src={Logop} alt="logo" />
        <h2>Welcome to U-BUS</h2>
        <form class="form" novalidate>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="ID"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <Link to="/home">
          <button>sign in</button>
          </Link>
          {/* <button formaction='/home'>sign in</button> */}
        </form>
      </div>
    </div>
  );
};

export default LoginS;
