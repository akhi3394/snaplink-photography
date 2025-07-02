import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Price from './pages/Price';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import HyperGuidelines from './pages/HyperGuidelines';
import RefundCancelPolicy from './pages/RefundCancelPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';

// More Info sub-pages

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

          {/* More Info Sub Routes */}
          <Route path="more-info/about-us" element={<AboutUs/>} />
          <Route path="more-info/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="more-info/hyper-guidelines" element={<HyperGuidelines/>} />
          <Route path="more-info/refund-cancel-policy" element={<RefundCancelPolicy/>} />
          <Route path="more-info/privacy-policy" element={<PrivacyPolicy/>} />
        </Route>

        {/* 404 - Page Not Found */}
        <Route
          path="*"
          element={<div className="text-white p-8">404 - Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
