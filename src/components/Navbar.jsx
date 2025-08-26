import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Navbar/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'More Info', path: '/more-info' },
    { name: 'Price', path: '/price' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const moreInfoLinks = [
    { name: 'About Us', path: '/more-info/about-us' },
    { name: 'Terms & Condition', path: '/more-info/terms-and-conditions' },
    { name: 'Hyper Guidelines', path: '/more-info/hyper-guidelines' },
    { name: 'Refund/Cancel Policy', path: '/more-info/refund-cancel-policy' },
    { name: 'Privacy Policy', path: '/more-info/privacy-policy' },
  ];

  const isMoreInfoActive = location.pathname.startsWith('/more-info');

  const handleLoginClick = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  const handleSignupClick = () => {
    navigate('/choose-signup');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowDropdown(false);
  };

  return (
    <nav
      key={location.pathname} // Force re-render on path change
      className="fixed top-0 left-0 z-50 bg-[#1C1C1C] w-full h-[105px] sm:h-[90px] md:h-[100px] lg:h-[111px] px-4 sm:px-6 md:px-8"
    >
      <div className="flex items-center justify-between h-full max-w-[1512px] mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-[200px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[330px] md:h-[270px]"
          />
          {/* <p className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-[#CCE7F6] font-serif">
            AniPicx
          </p> */}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-[#CCE7F6] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links and Buttons */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Navigation Links */}
          <div className="flex items-center gap-10 lg:gap-20 relative">
            {navLinks.map((link) =>
              link.name === 'More Info' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    to={link.path}
                    className={`font-rubik font-semibold leading-tight cursor-pointer text-[16px] lg:text-[18px] max-[1512px]:text-[16px] ${
                      isMoreInfoActive
                        ? 'text-white relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#CFE9FF]'
                        : 'text-[#D4D4D4] hover:text-white transition'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {showDropdown && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#2C2C2C] border border-[#4F4F4F] rounded-xl p-2 space-y-2 z-50 min-w-[220px] shadow-xl">
                      {moreInfoLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                            location.pathname === item.path
                              ? 'bg-[#404040] text-white'
                              : 'text-[#D4D4D4] hover:bg-[#404040] hover:text-white'
                          }`}
                          onClick={() => setShowDropdown(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-rubik font-semibold leading-tight text-[16px] lg:text-[18px] max-[1512px]:text-[16px] ${
                    location.pathname === link.path
                      ? 'text-white relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#CFE9FF]'
                      : 'text-[#D4D4D4] hover:text-white transition'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-5">
            <button
              onClick={handleSignupClick}
              className="bg-[#CCE7F6] rounded-[40.92px] w-[120px] lg:w-[137.54px] h-[35px] lg:h-[39.73px] flex items-center justify-center font-rubik font-semibold text-[#1C1C1C] text-[14px] lg:text-[16px] max-[1512px]:text-[14px] hover:opacity-90 transition"
            >
              Join AniPicx
            </button>
            <button
              onClick={handleLoginClick}
              className="bg-transparent rounded-[40.92px] border-2 border-[#CCE7F6] w-[120px] lg:w-[137.54px] h-[35px] lg:h-[39.73px] flex items-center justify-center font-rubik font-semibold text-white text-[14px] lg:text-[16px] max-[1512px]:text-[14px] hover:bg-[#CCE7F6] hover:text-[#1C1C1C] transition"
            >
              Login AniPicx
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          key="mobile-menu"
          className="lg:hidden bg-[#2C2C2C] w-full absolute top-[80px] sm:top-[90px] md:top-[100px] left-0 border-t border-[#4F4F4F] shadow-xl"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) =>
              link.name === 'More Info' ? (
                <div key={link.name} className="w-full text-center">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={`font-rubik font-semibold text-[16px] sm:text-[18px] ${
                      isMoreInfoActive
                        ? 'text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#CFE9FF]'
                        : 'text-[#D4D4D4] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                  {showDropdown && (
                    <div className="mt-2 bg-[#3C3C3C] rounded-lg mx-4 py-2">
                      {moreInfoLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-2 text-[14px] sm:text-[16px] font-medium ${
                            location.pathname === item.path
                              ? 'bg-[#404040] text-white'
                              : 'text-[#D4D4D4] hover:bg-[#404040] hover:text-white'
                          }`}
                          onClick={() => {
                            setShowDropdown(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-rubik font-semibold text-[16px] sm:text-[18px] ${
                    location.pathname === link.path
                      ? 'text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#CFE9FF]'
                      : 'text-[#D4D4D4] hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <button
              onClick={handleSignupClick}
              className="bg-[#CCE7F6] rounded-[40.92px] w-[120px] h-[35px] flex items-center justify-center font-rubik font-semibold text-[#1C1C1C] text-[14px] hover:opacity-90 transition"
            >
              Join AniPicx
            </button>
            <button
              onClick={handleLoginClick}
              className="bg-transparent rounded-[40.92px] border-2 border-[#CCE7F6] w-[120px] h-[35px] flex items-center justify-center font-rubik font-semibold text-white text-[14px] hover:bg-[#CCE7F6] hover:text-[#1C1C1C] transition"
            >
              Login AniPicx
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;