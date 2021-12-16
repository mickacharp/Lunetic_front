import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

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
      </BrowserRouter>
    </>
  )
}

export default App;
