import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Concept from './components/Concept';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/opticians" element={<Home />} />
          <Route path="/us" element={<Home />} />
          <Route path="/find-us" element={<Home />} />
          <Route path="/news" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
