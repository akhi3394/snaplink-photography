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
            ABOUT <span className="text-[#CCE7F6]">X1 STUDIOS & ANIPICX</span>
          </h1>
          <div className="italic text-[#DCDCDC] text-[14px] font-rubik">
            X1 Studios and AniPicx bring innovative, high-quality wedding solutions, redefining how memories are preserved and shared.
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">

          {/* About X1 Studios */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FiLink className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">About X1 Studios</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              One of the best software, project, and service providers for weddings, X1 Studios is recognized globally for its competence in all kinds of projects. The cross-disciplinary team of X1 Studios, based in Aligarh and operating throughout India, is extremely knowledgeable and experienced in a variety of fields and scales. The team at X1 Studios is incredibly curious, having received significant honors for their design applications from Premiere, Edius, and other video platforms. Their all-encompassing method of problem-solving produces designs that are in high demand throughout India. "At the very least, design must add value by valuing our material and human resources and fostering a culture that discourages people from throwing things away."
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Welcome to AniPicx */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsFillLightningFill className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Welcome to AniPicx</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              Our goal as AniPicx is to change the way you remember things. AniPicx, founded on the idea that every moment should be treasured in a special and compelling way, specializes in using cutting-edge 3D wedding books to bring your priceless memories to life.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Our Vision */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <PiDeviceMobileLight className="text-[#84C1FF] text-[20px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Our Vision</h2>
            </div>
            <p className="text-[16px] text-start leading-[24px] font-rubik text-[#A3A3A3]">
              Redefining the conventional photo album experience is our goal. We produce breathtaking 3D albums that make your most treasured moments seem to be leaping off the page by fusing state-of-the-art technology with creative design. AniPicx allows you to create a timeless, immersive experience in addition to preserving memories.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Why Choose AniPicx */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaRegHandshake className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Why Choose AniPicx</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] text-start leading-[24px] font-rubik">
              AniPicx is designed for:
            </p>
            <ul className="mt-2 space-y-2">
              {[
                'Innovative Technology: Your albums will stand out with breathtaking depth and detail thanks to our in-house 3D technology.',
                'User-Friendly Platform: Studio owners, photographers, and customers can easily manage albums and reports with our web-based application, created with simplicity in mind.',
                'Customizable Options: With a wide range of customization choices, you may make your albums reflect your own tastes and style.',
                'Outstanding Quality: To make sure that every record is as long-lasting as it is gorgeous, we only utilize the best supplies and methods.',
                'We help our clients market their AniPicx on social media sites.',
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