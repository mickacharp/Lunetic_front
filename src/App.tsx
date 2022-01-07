import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Catalogue from './components/Catalogue';
import Concept from './components/Concept';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Nous from './components/Nous';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/opticians" element={<Home />} />
          <Route path="/us" element={<Nous />} />
          <Route path="/find-us" element={<Home />} />
          <Route path="/news" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
