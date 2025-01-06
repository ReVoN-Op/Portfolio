import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    
  );
}

export default App;
