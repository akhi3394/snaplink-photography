import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LabBG from '../assets/LabVersionRegistrationBG.jpg';
import Camera from '../assets/HomeCamera.png';
import Logo from '../assets/Navbar/Logo.png';
import BackIcon from '/backSvg.svg';

const LabSignup = () => {
  const navigate = useNavigate();
  const [isPrintingLab, setIsPrintingLab] = useState(true);

  const handleBack = () => {
    navigate('/choose-signup');
  };

  return (
    <div className="relative w-full h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${LabBG})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Back Icon */}
      <div className="cursor-pointer z-50 fixed top-6 left-5" onClick={handleBack}>
        <img src={BackIcon} alt="Back" className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 py-6  overflow-y-auto">
        <div className="bg-white bg-opacity-10 xl:mt-48 2xl:mt-0 backdrop-blur-md p-6 rounded-lg border border-white/30 w-full max-w-[1100px] text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          
          {/* Logo */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10">
            <img src={Logo} alt="Snaplink Logo" className="w-[80px] h-[100px] object-contain" />
          </div>

          <h2 className="text-2xl font-semibold text-white mt-16 mb-2">Registration Form</h2>
          <p className="text-sm text-gray-300 mb-4">(Lab Version)</p>

          {/* Scrollable Form for XL screens */}
          <div className="xl:max-h-[70vh] xl:overflow-y-auto xl:scrollbar-thin xl:scrollbar-thumb-gray-400 xl:scrollbar-track-transparent xl:scrollbar-thumb-rounded-full xl:hover:scrollbar-thumb-gray-500 pr-2">
            <form className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-left">
              {/* Full Name & Toggle */}
              <div className="xl:col-span-2 flex flex-col xl:flex-row xl:items-center gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
                />
                <div className="flex items-center w-full">
                  <span className="text-white mr-2">Printing Lab</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!isPrintingLab}
                      onChange={() => setIsPrintingLab(!isPrintingLab)}
                      className=" sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                  <span className="text-white ml-2">Designing Lab</span>
                </div>
              </div>

              {/* Remaining Fields */}
              <input
                type="text"
                placeholder="Lab Name - Printing Lab"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Printing Machine - Model Number"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Printing Per Day - No. of Albums"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="GST No."
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Alternate Number"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Create 4-Digits Pin"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Full Address"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <select className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-gray-700 appearance-none focus:outline-none">
                <option>-- Select Country --</option>
              </select>
              <select className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-gray-700 appearance-none focus:outline-none">
                <option>-- Select State --</option>
              </select>
              <select className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-gray-700 appearance-none focus:outline-none">
                <option>-- Select City --</option>
              </select>
              <input
                type="text"
                placeholder="Pin Code"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm 4-Digits Pin"
                className="w-full px-3 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-600 focus:outline-none"
              />
            </form>
          </div>

          {/* Note */}
          <p className="text-red-500 text-sm mt-4 italic">Note: You are registering for Lab Version (Designing/Printing only)</p>

          {/* Terms */}
          <div className="flex items-center justify-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-white">I agree to the Terms & Conditions and Privacy Policy</span>
          </div>

          {/* Submit */}
          <button className="w-full bg-blue-400 text-white py-2 rounded mt-4 hover:bg-blue-500 transition">
            Join Now
          </button>

          {/* Links */}
          <p className="text-center text-gray-300 mt-4 text-sm italic">
            Want to Register For Studio Version (Photographers only)?{' '}
            <Link to="/signup/studio" className="text-blue-400 hover:underline">Join Here</Link>
          </p>
          <p className="text-center text-gray-300 mt-2 text-sm">
            Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabSignup;
