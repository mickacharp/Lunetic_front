import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LegalNotices from './components/LegalNotices';
import LoginForm from './components/LoginForm';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import Catalogue from './pages/Catalogue/Catalogue';
import ModelInfoModal from './pages/Catalogue/ModelInfoModal';
import Concept from './pages/Concept/Concept';
import Contact from './pages/Contact/Contact';
import ContactForm from './pages/Contact/ContactForm';
import FindUs from './pages/FindUs/FindUs';
import Home from './pages/Home/Home';
import Models from './pages/Models/Models';
import DetailsWishlist from './pages/MyAccount/DetailsWishlist';
import OpticianHome from './pages/MyAccount/OpticianHome';
import OpticianOrders from './pages/MyAccount/OpticianOrders';
import OpticianProfile from './pages/MyAccount/OpticianProfile';
import OpticianWishlists from './pages/MyAccount/OpticianWishlists';
import News from './pages/News/News';
import Us from './pages/Us/Us';

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
          <Route path="/catalogue/models/:id_model" element={<ModelInfoModal />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route
            path="/opticians/:id_optician/wishlists"
            element={<OpticianWishlists />}
          />
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
