import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
