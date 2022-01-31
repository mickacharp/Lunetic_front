import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Catalogue from './components/Catalogue';
import Concept from './components/Concept';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Home from './components/Home';
import LegalNotices from './components/LegalNotices';
import LoginForm from './components/LoginForm';
import ModalInfo from './components/ModalInfo';
import Montures from './components/Montures';
import Navbar from './components/Navbar';
import News from './components/News';
import Nous from './components/Nous';
import OpticianProfile from './components/OpticianProfile';
import OpticianHome from './components/OpticianHome';
import OpticianOrders from './components/OpticianOrders';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/montures" element={<Montures />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/opticians-home" element={<OpticianHome />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/us" element={<Nous />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/optician-profile" element={<OpticianProfile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/catalogue/models/:id_model" element={<ModalInfo />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/optician-orders" element={<OpticianOrders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
