import React from 'react';
import atmCard from '/atmcard.svg';
import bellIcon from '/bell.svg';
import activityIcon from '/activityfeed.svg';

const StudioDashboard = () => {
  return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
      {/* Welcome Text */}
      <h2 className="text-[28.88px] font-extrabold text-[#CCE7F6] mb-1 text-start">Welcome Neeraj,</h2>
      <p className="text-[14px] text-[#B0B0B0] mb-6 text-start">Summary of your albums, usage, and quick actions.</p>

      {/* Cards Section */}
      <div className="w-1/2 grid grid-cols-5 grid-rows-5 gap-4">
        {/* Total Credits Card */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 col-span-2 row-span-2">
          <img src={atmCard} alt="Credits Icon" className="w-[45.45px] h-[45.45px]" />
          <div>
            <p className="text-[14px] text-white font-semibold">Total Credits Used</p>
            <p className="text-[13px] text-[#D2D2D2]">2 of 3 Used</p>
          </div>
        </div>

        {/* Reminder Card */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 col-span-2 row-span-2 col-start-1 row-start-3">
          <img src={bellIcon} alt="Bell Icon" className="w-[40px] h-[40px]" />
          <div>
            <p className="text-[14px] text-white font-semibold">Plan / Credits Reminder</p>
            <p className="text-[13px] text-[#D2D2D2]">Expires in 12 days</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 border border-white/10 col-span-3 row-span-4 col-start-3 row-start-1">
          <div className="flex  justify-start gap-10 mb-6">
            <h3 className="text-[16px] font-semibold">Activity Feed</h3>
            <img src={activityIcon} alt="Activity Icon" className="w-[84.15px] h-[84.15px]" />
          </div>
          <p className="text-[13.33px] font-rubik  text-white text-start mb-3">
            You created <span className="text-[#fff] font-medium">‘Wedding__Ravi2025’</span> – <span className="text-[#A9A9A9]">2 days ago</span>
          </p>
          <p className="text-[13.33px] font-rubik  text-white text-start mb-3">
            Album <span className="text-[#fff] font-medium">‘Portfolio__Models’</span> got 38 new views
          </p>
          <p className="text-[13.33px] font-rubik text-white text-start">
            QR Code for <span className="text-[#fff] font-medium">‘Event__Mumbai’</span> was scanned 12 times
          </p>
        </div>
      </div>

      {/* Search Bar */}
     {/* Search Bar */}
<div className="w-full rounded-[25px] mx-auto mb-16 px-4 md:px-10 py-8 border border-[#244E64]">
  <h2 className="text-white text-[20px] md:text-[22px] font-semibold mb-6 text-start">
    Search Your Album
  </h2>

  <div className="flex flex-col lg:flex-row flex-wrap gap-4 md:gap-6 items-stretch">
    {/* Text Input */}
    <input
      type="text"
      placeholder="Write your Name as Written On Album"
      className="w-full lg:w-[35%] px-4 md:px-6 py-3 md:py-4 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
    />

    {/* Date Input */}
    <div className="relative w-full lg:w-[20%]">
      <input
        type="text"
        placeholder="Date of Function"
        className="w-full px-4 md:px-6 py-3 md:py-4 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
      />
      {/* Date Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* SVG icon stays the same */}
      </div>
    </div>

    {/* Search Button */}
    <button
      className="w-full lg:w-[15%] px-6 py-3 md:py-4 text-white text-[16px] md:text-[18px] rounded-[12px] font-semibold hover:opacity-80 transition"
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

    </div>
  );
};

export default StudioDashboard;
