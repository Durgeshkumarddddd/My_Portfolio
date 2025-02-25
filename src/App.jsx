// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Contribution from './components/Contribution';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Contribution />
    </div>
  );
}

export default App;