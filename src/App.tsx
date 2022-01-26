import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Catalogue from './components/Catalogue';
import Concept from './components/Concept';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Montures from './components/Montures';
import Navbar from './components/Navbar';
import Nous from './components/Nous';
import OpticianProfile from './components/OpticianProfile';
import FindUs from './components/FindUs';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/montures" element={<Montures />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/opticians" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/us" element={<Nous />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/news" element={<Home />} />
          <Route path="/optician-profile" element={<OpticianProfile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
