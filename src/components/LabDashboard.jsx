import React from 'react';
import atmCard from '/atmcard.svg';
import bellIcon from '/bell.svg';
import activityIcon from '/activityfeed.svg';
import TotalAlbumbs from '/totalAlbumbs.svg';
import TotalPhotographers from '/TotalPhotographers.svg';

const LabDashboard = () => {
  return (
    <div
      className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6"
      style={{ backgroundImage: `url('/bg-pattern.svg')` }}
    >
      {/* Welcome Text */}
      <h2 className="text-[28.88px] font-extrabold text-[#CCE7F6] mb-1 text-start">
        Welcome Neeraj,
      </h2>
      <p className="text-[14px] text-[#B0B0B0] mb-6 text-start">
        Summary of your albums, usage, and quick actions.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-4 gap-4 w-full">
        {/* 1 - Total Albums */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 
                        col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2">
          <img src={TotalAlbumbs} alt="Album Icon" className="w-[45px] h-[45px]" />
          <div>
            <p className="text-[14px] text-white font-semibold">Total Albums</p>
            <p className="text-[13px] text-[#D2D2D2]">8</p>
          </div>
        </div>

        {/* 2 - Total Credits */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 
                        col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3">
          <img src={atmCard} alt="Credits Icon" className="w-[45.45px] h-[45.45px]" />
          <div>
            <p className="text-[14px] text-white font-semibold">Total Credits</p>
            <p className="text-[13px] text-[#D2D2D2]">3 of 3 left</p>
          </div>
        </div>

        {/* 3 - Total Photographers */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 
                        col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
          <img src={TotalPhotographers} alt="Photographer Icon" className="w-[45px] h-[45px]" />
          <div>
            <p className="text-[14px] text-white font-semibold">Total Photographers</p>
            <p className="text-[13px] text-[#D2D2D2]">4</p>
          </div>
        </div>

        {/* 4 - Reminder */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 flex flex-col items-center gap-4 border border-white/10 
                        col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3">
          <img src={bellIcon} alt="Bell Icon" className="w-[40px] h-[40px]" />
          <div>
            <p className="text-[14px] text-white font-semibold text-center">
              Plan / Credits Reminder
            </p>
            <p className="text-[13px] text-[#D2D2D2]">Expires in 10 days</p>
          </div>
        </div>

        {/* 5 - Activity Feed */}
        <div className="bg-[#002D4C] rounded-[14px] p-4 border border-white/10 
                        col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-1">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[16px] font-semibold text-white">Activity Feed</h3>
            <img
              src={activityIcon}
              alt="Activity Icon"
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[84.15px] lg:h-[84.15px]"
            />
          </div>

          <ul className="text-white text-[13px] font-rubik text-start space-y-3">
            <li>
              📸 Album <strong>"AnanyaBirthday__1yr"</strong> viewed 45 times –{" "}
              <span className="text-[#A9A9A9]">3 days ago</span>
            </li>
            <li>
              🔒 Password set on album <strong>"Maternity__Kavya2025"</strong> –{" "}
              <span className="text-[#A9A9A9]">4 days ago</span>
            </li>
            <li>
              👤 Photographer updated: <strong>Pixel Vibe Studio</strong> –{" "}
              <span className="text-[#A9A9A9]">5 days ago</span>
            </li>
            <li>
              📤 Album <strong>"BabyShoot__Aarav"</strong> shared via AniPicx –{" "}
              <span className="text-[#A9A9A9]">Yesterday</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
