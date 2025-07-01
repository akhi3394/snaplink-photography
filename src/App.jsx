import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Price from './pages/Price';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="more-info" element={<MoreInfo />} />
          <Route path="price" element={<Price />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Example: Routes without Navbar */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        {/* 404 */}
        <Route path="*" element={<div className="text-white p-8">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
