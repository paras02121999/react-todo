import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Index from './Index';

export const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>;
};

export default App
