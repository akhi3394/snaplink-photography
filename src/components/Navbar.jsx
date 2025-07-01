import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Navbar/Logo.png';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'More Info', path: '/more-info' },
    { name: 'Price', path: '/price' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 bg-[#1C1C1C] w-full h-[101px] px-8">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[62px] h-[85px]" />
        </div>

        <div className="flex gap-[40px]">
          {/* Navigation Links */}
          <div className="flex items-center gap-[80px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-[600] font-rubik leading-[100%] tracking-normal 
                  ${
                    location.pathname === link.path
                      ? 'text-white relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#CFE9FF]'
                      : 'text-[#D4D4D4] hover:text-white transition'
                  }
                  text-[18px] max-[1512px]:text-[16px]`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[20px]">
            <button
              className="bg-[#CCE7F6] rounded-[40.92px] 
                w-[137.54px] h-[39.73px] 
                flex items-center justify-center 
                font-[600] font-rubik text-[#1C1C1C] text-[16px] max-[1512px]:text-[14px]
                hover:opacity-90 transition"
            >
              Join SnapLink
            </button>

            <button
              className="bg-transparent rounded-[40.92px] border-[2px] border-[#CCE7F6]
                w-[137.54px] h-[39.73px] 
                flex items-center justify-center 
                font-[600] font-rubik text-white text-[16px] max-[1512px]:text-[14px]
                hover:bg-[#CCE7F6] hover:text-[#1C1C1C] transition"
            >
              Login SnapLink
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
