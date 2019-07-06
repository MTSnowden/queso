import React from 'react';
// import Header from './components/Header/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Jumbotron, Button} from 'reactstrap'
import ReactSearchBox from 'react-search-box'
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../src/logo.png'
import LeftComponent from './components/LeftComponent/LeftComponent';
import RightComponent from './components/RightComponent/RightComponent';
// import blanco from './images/queso-blanco'

function App() {
  return (
    
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">

        <a className="navbar-brand">
          <img src={logo} width="50" height="50" alt="logo" />
        </a>

        <Link to ="/" className="navbar-brand">CHZPLZ</Link>
        <Link to="/Login" className="navbar-item">Login</Link>
        
        <div className="search-container">
        <ReactSearchBox
          placeholder="Search"
        />
        <Button />
        </div>
           
      </nav>

      <Jumbotron></Jumbotron>

      <div className="body">
       <LeftComponent />
       <RightComponent />
      </div>

    </div>
    </Router>
  );
}

export default App;