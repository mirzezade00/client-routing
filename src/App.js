import React  from "react";
import "./App.css"
import {Routes, Route, NavLink} from 'react-router-dom';
import About from "./About";
import Job from "./Job";
import Connectinfo from "./Connectinfo";
const App = () => {
  
  return (
    <div className="app">
      <div className="menu">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/job">Job</NavLink>
        <NavLink to="/connectinfo">Connect Information</NavLink>
      </div>

      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/job" element={<Job/>}/>
        <Route path="/connectinfo" element={<Connectinfo/>}/>
      </Routes>
    </div>
  );
};

export default App;