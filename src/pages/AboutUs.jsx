import React from 'react';
import { FiLink } from 'react-icons/fi';
import { BsFillLightningFill } from 'react-icons/bs';
import { PiDeviceMobileLight } from 'react-icons/pi';
import { FaRegHandshake } from 'react-icons/fa6';
import aboutBg from '../assets/AboutsUsBG.jpg';

const AboutUs = () => {
  return (
    <div
      className="relative mt-[101px] px-[80px] max-[1440px]:px-[40px] max-[1024px]:px-[20px] bg-no-repeat bg-cover min-h-[100vh]"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay to reduce brightness */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 p-4">
        {/* Fixed Header with line */}
        <div className="text-center mb-6">
          <h1 className="text-[32px] max-[1440px]:text-[28px] font-[700] text-white font-rubik ">
            ABOUT <span className="text-[#CCE7F6]">SNAPLINK</span>
          </h1>
          <div className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Snaplink is your smart, branded way to deliver e-albums — fast, professional, and just one tap away.
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">

          {/* What is Snaplink */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FiLink className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">What is Snaplink?</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              Snaplink is a smart, shareable link system built for photographers and studios who want to deliver their
              albums in a faster, cleaner, and more professional way. With just one link or QR code, your clients can
              instantly access their personalized album — no app download, no confusion.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Why Snaplink */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsFillLightningFill className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Why Snaplink?</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              In the fast-paced world of photography, first impressions matter. Snaplink helps you impress clients from
              the very first tap. Whether it’s a wedding shoot, pre-wedding, baby shoot, or event coverage — Snaplink turns
              traditional album delivery into a modern, premium experience.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* How It Works */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <PiDeviceMobileLight className="text-[#84C1FF] text-[20px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">How It Works</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              Upload your photos, create an album, and generate a Snaplink. Each Snaplink is unique, secure, and
              mobile-friendly. You can even customize the preview, add your branding, and control access settings like
              expiration dates or password protection.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Who It's For */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaRegHandshake className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Who It’s For</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] text-start leading-[24px] font-rubik">
              Snaplink is made for:
            </p>
            <ul className="mt-2 space-y-2">
              {[
                'Independent photographers',
                'Design and print labs',
                'Photography studios managing multiple clients',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-[6px] w-[6px] rounded-full bg-[#84C1FF]"></span>
                  <span className="text-[16px] text-white font-[600] font-rubik">{item}</span>
                </li>
              ))}
            </ul>



          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
