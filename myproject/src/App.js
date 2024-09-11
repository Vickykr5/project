import React from "react";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import Project from "./router/Project";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Project" element={<Project/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;
