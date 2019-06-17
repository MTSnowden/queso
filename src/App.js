import React, { Component } from 'react';
// import Header from './components/Header/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Router from './Router';
import logo from '../src/logo.png'
import LeftComponent from './components/LeftComponent/LeftComponent';
import RightComponent from './components/RightComponent/RightComponent';

function App() {
  return (
    
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">

        <a className="navbar-brand">
          <img src={logo} width="50" height="50" alt="logo" />
        </a>

        <Link to ="/" className="navbar-brand">CHZPLZ</Link>
        <div className="collapse nav-collapse">
          <ul className="navbar nav mr-auto">
            <li className="navbar-item">
              {/* <Link to="" */}
            </li>
            <li className="navbar-item">
              {/* <Link to="" */}
            </li>
          </ul>
        </div>
      </nav>

      <div className="body">
       <LeftComponent />
       <RightComponent />
      </div>

    </div>
    </Router>
  );
}

export default App;