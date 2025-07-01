import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <div className="pt-20 pb-32 px-6">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1
              className="text-[60px]  font-rozha mb-4 leading-tight 
              bg-clip-text text-transparent"
              style={{
                background:
                  'linear-gradient(206.18deg, #FFFED4 16.39%, #FFFC97 83.61%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Where Every Page Feels Alive.
            </h1>
          </div>

          {/* 🔥 Search Section (Updated as per design) */}
          <div
            className="w-full rounded-[25px] mx-auto mb-32 px-16 py-8"
            style={{
              boxShadow: '9px 4px 10.9px 0px #FFFFFF0A',
              backgroundColor: '#FFFFFF0A',
            }}
          >
            <h2 className="text-white text-[22px] font-semibold mb-8 text-start">
              Search Your Album
            </h2>

            <div className="flex flex-col lg:flex-row flex-wrap gap-8 items-center">
              {/* Text Input */}
              <input
                type="text"
                placeholder="Write your Name as Written On Album"
                className="w-full lg:w-[35%] px-6 py-4 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
              />

              {/* Date Input */}
              <div className="relative w-full lg:w-[15%]">
                <input
                  type="text"
                  placeholder="Date of Function"
                  className="w-full px-6 py-4 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
                />
                {/* Date SVG Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 7.5C0 5.614 -5.96046e-08 4.672 0.586 4.086C1.172 3.5 2.114 3.5 4 3.5H16C17.886 3.5 18.828 3.5 19.414 4.086C20 4.672 20 5.614 20 7.5C20 7.971 20 8.207 19.854 8.354C19.707 8.5 19.47 8.5 19 8.5H1C0.529 8.5 0.293 8.5 0.146 8.354C-8.9407e-08 8.207 0 7.97 0 7.5ZM0 16.5C0 18.386 -5.96046e-08 19.328 0.586 19.914C1.172 20.5 2.114 20.5 4 20.5H16C17.886 20.5 18.828 20.5 19.414 19.914C20 19.328 20 18.386 20 16.5V11.5C20 11.029 20 10.793 19.854 10.646C19.707 10.5 19.47 10.5 19 10.5H1C0.529 10.5 0.293 10.5 0.146 10.646C-8.9407e-08 10.793 0 11.03 0 11.5V16.5Z"
                      fill="#B6B4B4"
                    />
                    <path
                      d="M5 1.5V4.5M15 1.5V4.5"
                      stroke="#B6B4B4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button
                className="w-full lg:w-[10%] px-6 py-4 text-[#FFFFFF] text-[18px] rounded-[12px] font-semibold hover:opacity-80 transition"
                style={{
                  gap: '10px',
                  background: `linear-gradient(0deg, rgba(211, 230, 255, 0.55), rgba(211, 230, 255, 0.55)),
                 linear-gradient(91.86deg, #4EB6D0 -10.31%, #170AA7 118.77%)`,
                }}
              >
                Search
              </button>

            </div>
          </div>

          {/* ✅ How It Works Section (Unchanged) */}
          <div className="text-center mb-20 px-16 py-8 rounded-[25px]"
          style={{
              boxShadow: '9px 4px 10.9px 0px #FFFFFF0A',
              backgroundColor: '#FFFFFF0A',
            }}>
            <h2 className="text-white text-3xl font-bold mb-16">
              How It Works..?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-yellow-accent rounded-2xl flex items-center justify-center transform rotate-3">
                    <div className="w-16 h-12 bg-navy rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-navy rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Upload Your Photos
                </h3>
                <p className="text-gray-300 text-sm italic">
                  Add your best shots to a custom album
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-pink-400 rounded-2xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Customize & Generate 3D View
                </h3>
                <p className="text-gray-300 text-sm italic">
                  Choose layout, cover, and branding - preview in 3D.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="w-full h-full bg-blue-primary rounded-2xl flex items-center justify-center transform -rotate-3">
                    <div className="w-8 h-6 bg-white rounded-sm transform rotate-12"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Share via Link or QR Code
                </h3>
                <p className="text-gray-300 text-sm italic">
                  Send to clients with a single scan or click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
