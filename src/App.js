import React, {Component} from 'react';
import Header from './components/Header/Header';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Router />
    </BrowserRouter>

    <Map />
    
  );
}

export default App;