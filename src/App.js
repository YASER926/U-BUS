import logo from './logo.svg';
import './App.css';
import LoginS from './components/LoginS/LoginS.js';
import HomePage from './components/HomePage.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginS />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
