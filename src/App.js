import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
    <Home />
    <Router />
    </BrowserRouter>
  );
}

export default App;
