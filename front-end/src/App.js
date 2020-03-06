import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import styled from "styled-components"
import MarketPrice from "./Components/MarketPrice"
import Dashboard from "./Components/Dashboard"

function App() {
  return (
    <div className="App">
      
      <Route
    path = "/"
    exact component = {Dashboard} />
    <Route
    path = "/MarketPrice"
    component = {MarketPrice} />  
        
    </div>
 
  );
}

export default App;
