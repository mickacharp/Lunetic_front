import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Catalogue from './components/Catalogue';
import Concept from './components/Concept';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import DetailsWishlist from './components/DetailsWishlist';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Home from './components/Home';
import LegalNotices from './components/LegalNotices';
import LoginForm from './components/LoginForm';
import ModalInfo from './components/ModalInfo';
import Models from './components/Models';
import Navbar from './components/Navbar';
import News from './components/News';
import OpticianHome from './components/OpticianHome';
import OpticianOrders from './components/OpticianOrders';
import OpticianProfile from './components/OpticianProfile';
import Us from './components/Us';
import Wishlist from './components/Wishlist';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/optician-home" element={<OpticianHome />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/us" element={<Us />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/optician-profile" element={<OpticianProfile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/catalogue/models/:id_model" element={<ModalInfo />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/opticians/:id_optician/wishlists" element={<Wishlist />} />
          <Route path="/optician-orders" element={<OpticianOrders />} />
          <Route
            path="/opticians/:id_optician/wishlists/:id_wishlist"
            element={<DetailsWishlist />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
