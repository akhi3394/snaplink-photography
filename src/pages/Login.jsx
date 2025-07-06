import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Designer from '../assets/LoginasDesignerBG.jpg';
import Photographer from '../assets/LoginasPhotographerBG.jpg';
import Camera from '../assets/HomeCamera.png';
import Logo from '../assets/Navbar/Logo.png';

const Login = () => {
  const [activeForm, setActiveForm] = useState('photographer');
  const navigate = useNavigate();

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect based on active form
    if (activeForm === 'photographer') {
      navigate('/dashboard/studio');
    } else if (activeForm === 'designer') {
      navigate('/dashboard/lab');
    }
  };

  return (
    <>
      <div className="">
        <img
          src={Camera}
          alt="Camera"
          className="fixed -top-8 right-0 w-[150px] md:w-[180px] lg:w-[220px] object-contain z-50"
        />
      </div>
      <div className="cursor-pointer" onClick={handleBack}>
        <img
          src="./backSvg.svg"
          alt="Back"
          className="fixed top-6 left-5 z-50"
        />
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-100 object-contain transition-all duration-700"
          style={{
            backgroundImage: `url(${activeForm === 'photographer' ? Photographer : Designer})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Login Forms Container */}
        <div className="relative z-20 w-full h-full flex ">
          {/* Designer Form */}
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-[#1B2734AB] transition-all duration-700 ease-in-out
    ${activeForm === 'designer' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                {/* Glassmorphic Card */}
                <div className="relative bg-transparent px-10 py-10 rounded-[25px] border border-white/30 w-[504px] text-center">
                  {/* Logo Centered Top */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <img
                      src={Logo}
                      alt="Snaplink Logo"
                      className="w-[104px] h-[142px] object-contain"
                    />
                  </div>

                  <h2 className="text-[29.73px] font-rubik font-semibold text-white mt-12 mb-5">Login as Designer</h2>
                  <p className="text-[16.52px] text-white italic mt-1 text-start">
                    Welcome Back,
                  </p>
                  <p className="text-[#A09F9F] text-[14.76px] italic text-start mb-5">Login here to continue to Your Account</p>
                  {/* Form */}
                  <form className="space-y-5" onSubmit={handleLogin}>
                    <div className="text-left">
                      <label className="block text-white font-medium mb-1 text-sm">Mobile Number</label>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
                      />
                    </div>

                    <div className="text-left">
                      <label className="block text-white font-medium mb-1 text-sm">Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
                      />
                    </div>

                    <div className="flex items-center text-sm text-white/80">
                      <input type="checkbox" className="mr-2" />
                      <span>Remember me</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8AB4F8] hover:bg-[#74a4f3] text-white text-[18px] font-semibold py-3 rounded-[8px] transition-all duration-200"
                    >
                      Login
                    </button>
                  </form>
                </div>

                {/* Switch to Photographer Button */}
                <button
                  onClick={() => handleFormSwitch('photographer')}
                  className="w-[237px] mx-auto text-white text-[18px] font-medium mt-10 border border-white rounded-[37px] py-2 hover:bg-white/10 transition"
                >
                  Login As Photographer
                </button>
              </div>
            </div>
          </div>

          {/* Photographer Form */}
          <div
            className={`absolute right-0 top-0 h-full w-1/2 bg-[#1B2734AB] transition-all duration-700 ease-in-out 
              ${activeForm === 'photographer' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="h-full flex items-center justify-center">
              <div className="flex flex-col">
                <div className="relative bg-transparent px-10 py-10 rounded-[25px] border border-white/30 w-[504px] text-center">
                  {/* Logo Centered Top */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <img
                      src={Logo}
                      alt="Snaplink Logo"
                      className="w-[104px] h-[142px] object-contain"
                    />
                  </div>

                  <h2 className="text-[29.73px] font-rubik font-semibold text-white mt-12 mb-5">Login as Photographer</h2>
                  <p className="text-[16.52px] text-white italic mt-1 text-start">
                    Welcome Back,
                  </p>
                  <p className="text-[#A09F9F] text-[14.76px] italic text-start mb-5">Login here to continue to Your Account</p>

                  {/* Form */}
                  <form className="space-y-5" onSubmit={handleLogin}>
                    <div className="text-left">
                      <label className="block text-white font-medium mb-1 text-sm">Mobile Number</label>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
                      />
                    </div>

                    <div className="text-left">
                      <label className="block text-white font-medium mb-1 text-sm">Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
                      />
                    </div>

                    <div className="flex items-center text-sm text-white/80">
                      <input type="checkbox" className="mr-2" />
                      <span>Remember me</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8AB4F8] hover:bg-[#74a4f3] text-white text-[18px] font-semibold py-3 rounded-[8px] transition-all duration-200"
                    >
                      Login
                    </button>
                  </form>
                </div>
                <button
                  onClick={() => handleFormSwitch('designer')}
                  className="w-[237px] mx-auto text-white text-[18px] font-medium mt-10 border border-white rounded-[37px] py-2 hover:bg-white/10 transition"
                >
                  Login As Designer
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-14 left-0 right-0 flex justify-center">
            <div className="mt-4 text-center text-[#FFFFFF] text-[16.52px] font-semibold italic">
              Don’t have an account?{' '}
              <Link to="/register" className="text-[#FFFFFF] hover:underline">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;