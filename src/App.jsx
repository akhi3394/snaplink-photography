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
import Login from './pages/Login';
import ChooseSignup from './pages/ChooseSignup';
import StudioSignup from './pages/StudioSignup';
import LabSignup from './pages/LabSignup';
import DashboardLayout from './pages/DashboardLayout';
import StudioDashboard from './components/StudioDashboard';
import StudioAllAlbums from './components/StudioAllAlbums';
import StudioCreateNew from './components/StudioCreateNew';
import StudioManageCredits from './components/StudioManageCredits';
import StudioSupport from './components/StudioSupport';
import LabDashboard from './components/LabDashboard';
import LabAlbums from './components/LabAlbums';
import LabPhotographers from './components/LabPhotographers';
import LabCredits from './components/LabCredits';
import LabSupportContact from './components/LabSupportContact';
import StudioEditAlbum from './components/StudioEditAlbum';
import Profile from './components/Profile';
import StudioProfile from './components/Profile';
import StudioAlbumView from './components/StudioAlbumView';
import LabAlbumView from './components/LabAlbumView';
import LabEditAlbum from './components/LabEditAlbum';
import LabAddAlbum from './components/LabAddAlbum';

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
          <Route path="more-info/about-us" element={<AboutUs />} />
          <Route path="more-info/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="more-info/hyper-guidelines" element={<HyperGuidelines />} />
          <Route path="more-info/refund-cancel-policy" element={<RefundCancelPolicy />} />
          <Route path="more-info/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/choose-signup" element={<ChooseSignup />} />
        <Route path="/signup/studio" element={<StudioSignup />} />
        <Route path="/signup/lab" element={<LabSignup />} />


        {/* Post-Login Routes with DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="studio" element={<StudioDashboard />} />
          <Route path="studio/all-albums" element={<StudioAllAlbums />} />
          <Route path="studio/create-new" element={<StudioCreateNew />} />
          <Route path="studio/manage-credits" element={<StudioManageCredits />} />
          <Route path="studio/support" element={<StudioSupport />} />
          <Route path="studio/profile" element={<StudioProfile />} /> {/* ⬅️ Add this line */}
          <Route path="studio/edit-album/:id" element={<StudioEditAlbum />} />

          <Route path="lab" element={<LabDashboard />} />
          <Route path="lab/albums" element={<LabAlbums />} />
          <Route path="lab/photographers" element={<LabPhotographers />} />
          <Route path="lab/credits" element={<LabCredits />} />
          <Route path="lab/support-contact" element={<LabSupportContact />} />
          <Route path="lab/edit-album/:id" element={<LabEditAlbum />} />
          <Route path="lab/add-album" element={<LabAddAlbum />} />

        </Route>
        <Route path="/dashboard/studio/album/:albumId" element={<StudioAlbumView />} />
        <Route path="/dashboard/lab/album/:albumId" element={<LabAlbumView />} />

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
