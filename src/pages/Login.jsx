import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Designer from "../assets/LoginasDesignerBG.jpg";
import Photographer from "../assets/LoginasPhotographerBG.jpg";
import Camera from "../assets/HomeCamera.png";
import Logo from "../assets/Navbar/Logo.png";

const Login = () => {
  const [activeForm, setActiveForm] = useState("photographer");
  const navigate = useNavigate();

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (activeForm === "photographer") {
      navigate("/dashboard/studio");
    } else if (activeForm === "designer") {
      navigate("/dashboard/lab");
    }
  };

  // Shared Form Card
  const renderForm = (role) => (
    <div
      className="
        relative bg-transparent 
        px-6 sm:px-8 md:px-10 
        py-8 sm:py-9 md:py-10 
        rounded-[20px] md:rounded-[25px] 
        border border-white/30 
        w-full max-w-[360px] sm:max-w-[420px] md:max-w-[504px] 
        text-center
      "
    >
      {/* Logo */}
      <div className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2">
        <img
          src={Logo}
          alt="Snaplink Logo"
          className="w-[70px] h-[90px] sm:w-[90px] sm:h-[120px] md:w-[104px] md:h-[142px] object-contain"
        />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-[29.73px] font-rubik font-semibold text-white mt-10 sm:mt-12 mb-4 sm:mb-5">
        Login as {role === "photographer" ? "Photographer" : "Designer"}
      </h2>
      <p className="text-sm sm:text-[15px] md:text-[16.52px] text-white italic mt-1 text-start">
        Welcome Back,
      </p>
      <p className="text-xs sm:text-sm md:text-[14.76px] text-[#A09F9F] italic text-start mb-4 sm:mb-5">
        Login here to continue to Your Account
      </p>

      {/* Form */}
      <form className="space-y-4 sm:space-y-5" onSubmit={handleLogin}>
        <div className="text-left">
          <label className="block text-white font-medium mb-1 text-xs sm:text-sm">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[5px] text-sm md:text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
          />
        </div>

        <div className="text-left">
          <label className="block text-white font-medium mb-1 text-xs sm:text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-[5px] text-sm md:text-[14px] border border-white placeholder:text-gray-400 bg-white text-black outline-none"
          />
        </div>

        <div className="flex items-center text-xs sm:text-sm text-white/80">
          <input type="checkbox" className="mr-2" />
          <span>Remember me</span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8AB4F8] hover:bg-[#74a4f3] text-white text-sm sm:text-base md:text-[18px] font-semibold py-2 sm:py-3 rounded-[8px] transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );

  return (
    <>
      {/* Camera Top Right */}
      <div>
        <img
          src={Camera}
          alt="Camera"
          className="fixed -top-6 sm:-top-8 right-0 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] object-contain z-50"
        />
      </div>

      {/* Back Button */}
      <div className="cursor-pointer" onClick={handleBack}>
        <img
          src="./backSvg.svg"
          alt="Back"
          className="fixed top-5 sm:top-6 left-4 sm:left-5 z-50 w-[28px] sm:w-[32px]"
        />
      </div>

      {/* Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-700"
          style={{
            backgroundImage: `url(${
              activeForm === "photographer" ? Photographer : Designer
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Desktop ≥1280px (side by side) */}
        <div className="hidden xl:flex relative z-20 w-full h-full">
          {/* Designer Form */}
          <div
            className={`absolute left-0 top-0 h-full w-1/2 bg-[#1B2734AB] flex items-center justify-center transition-all duration-700 ${
              activeForm === "designer"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center">
              {renderForm("designer")}
              <button
                onClick={() => handleFormSwitch("photographer")}
                className="w-[200px] md:w-[237px] mx-auto text-white text-sm md:text-[18px] font-medium mt-6 md:mt-10 border border-white rounded-[37px] py-2 hover:bg-white/10 transition"
              >
                Login As Photographer
              </button>
            </div>
          </div>

          {/* Photographer Form */}
          <div
            className={`absolute right-0 top-0 h-full w-1/2 bg-[#1B2734AB] flex items-center justify-center transition-all duration-700 ${
              activeForm === "photographer"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center">
              {renderForm("photographer")}
              <button
                onClick={() => handleFormSwitch("designer")}
                className="w-[200px] md:w-[237px] mx-auto text-white text-sm md:text-[18px] font-medium mt-6 md:mt-10 border border-white rounded-[37px] py-2 hover:bg-white/10 transition"
              >
                Login As Designer
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet <1280px (single card) */}
        <div className="xl:hidden relative z-20 w-full h-full flex items-center justify-center px-4 sm:px-6">
          <div className="flex flex-col items-center">
            {renderForm(activeForm)}
            <button
              onClick={() =>
                handleFormSwitch(
                  activeForm === "designer" ? "photographer" : "designer"
                )
              }
              className="w-[180px] sm:w-[200px] md:w-[220px] mx-auto text-white text-sm sm:text-base md:text-[18px] font-medium mt-6 sm:mt-8 border border-white rounded-[37px] py-2 hover:bg-white/10 transition"
            >
              {activeForm === "designer"
                ? "Login As Photographer"
                : "Login As Designer"}
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 flex justify-center">
          <div className="mt-4 text-center text-white text-sm sm:text-base md:text-[16.52px] font-semibold italic z-50">
            Don’t have an account?{" "}
            <Link to="/register" className="text-white hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
