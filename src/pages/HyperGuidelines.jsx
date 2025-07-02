import React from 'react';
import { FaTools } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import aboutBg from '../assets/AboutsUsBG.jpg'; // Same BG as PrivacyPolicy

const HyperGuidelines = () => {
  return (
    <div
      className="relative mt-[101px] px-[80px] max-[1440px]:px-[40px] max-[1024px]:px-[20px] bg-no-repeat bg-cover min-h-[100vh]"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[32px] max-[1440px]:text-[28px] font-[700] text-white font-rubik">
            HYPER <span className="text-[#CCE7F6]">GUIDELINES</span>
          </h1>
          <p className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Get the Most Out of Your Snaplink Experience
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Hyper Guidance is your personal support layer — built to make sure every album, every link, and every interaction looks professional, polished, and on-brand.
          </p>

          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Whether you're just getting started or want to level up your delivery game, Hyper Guidance walks you through everything step by step.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* What's Included */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">What's Included:</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Step-by-Step Tutorials',
                'Learn how to create, customize, and share albums with ease.',
                'Smart Tips & Best Practices',
                'From image order to link branding, we guide you on making a great impression.',
                'Use Case Playbooks',
                'Ready-to-use examples for wedding shoots, baby shoots, fashion, product portfolios, and more.',
                'Troubleshooting Help',
                'Stuck somewhere? We highlight common mistakes and how to fix them fast.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Who's It For */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Who's It For:</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'New users who want quick onboarding',
                'Studios managing high album volumes',
                'Designers and labs supporting multiple photographers',
                'Anyone aiming to deliver albums faster, better, and smarter',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperGuidelines;