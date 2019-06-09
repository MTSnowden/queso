import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import LeftComponent from './components/LeftComponent/LeftComponent';
import RightComponent from './components/RightComponent/RightComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
    <div className="body">
       <LeftComponent />
       <RightComponent />
      </div>
    </div>
  );
}

export default App;

