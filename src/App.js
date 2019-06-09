import React, {Component} from 'react';
import Header from './components/Header/Header';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import LeftComponent from './components/LeftComponent/LeftComponent';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Router />
    <LeftComponent />
    </BrowserRouter>
    
    // <LeftComponent />
  );
}

export default App;

