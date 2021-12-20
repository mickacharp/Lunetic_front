import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route path="/concept" element={<Home />} />
          <Route path="/opticians" element={<Home />} />
          <Route path="/us" element={<Home />} />
          <Route path="/find-us" element={<Home />} />
          <Route path="/news" element={<Home />} />
        </Routes>
        <Nous />
      </BrowserRouter>
    </>
  );
};

export default App;
