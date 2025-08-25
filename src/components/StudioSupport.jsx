import React from 'react';
import phone from '../assets/mobileIcon.png';
import email from '../assets/emailIcon.png';
import Location from '../assets/LocationPinIcon.png';

const StudioSupport = () => {
  return (
    <div
      className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6"
      style={{ backgroundImage: `url('/bg-pattern.svg')` }}
    >
      <h2 className="text-[28.88px] font-extrabold text-[#CCE7F6] mb-4 text-start">
        Support
      </h2>

      {/* Top Options */}
      <div className="flex flex-col md:flex-row w-full gap-3 md:gap-20 mb-3">
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          About Us
        </p>
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          Terms & Condition
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-3 md:gap-20 mb-3">
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          Hyper Guidelines
        </p>
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          Refund/Cancel Policy
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-3 md:gap-20 mb-10">
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          Privacy Policy
        </p>
        <p className="bg-[#E3E3E326] w-full md:w-1/2 py-4 rounded-[12px] text-[18px] text-start px-3">
          FAQ
        </p>
      </div>

      {/* Contact Us */}
      <h2
        className="text-[18px] font-semibold text-[#CCE7F6] px-5 rounded-[9px] py-4 mb-10 text-start"
        style={{
          background:
            "linear-gradient(90deg, rgba(32, 37, 126, 0.46) 0%, rgba(11, 14, 81, 0.46) 100%)",
        }}
      >
        Contact us
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-4 mb-6 w-full lg:w-1/2">
          {[
            {
              icon: phone,
              label: "Phone",
              text: "+91 89336 92152",
            },
            {
              icon: email,
              label: "Email",
              text: "support@companyemail.com",
            },
            {
              icon: Location,
              label: "Address",
              text: "Address Company Address Here with PIN",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#2A2A2A] p-4 rounded-lg shadow-[0_4px_4px_rgba(238,238,238,0.5),0_0_4px_rgba(0,0,0,0.25)]"
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-[44.79px] h-[44.79px] mr-3"
              />
              <div className="flex flex-col">
                <span className="font-rubik font-semibold text-[17.91px] text-[#CCE7F6] text-start">
                  {item.label}
                </span>
                <span className="font-rubik font-semibold text-[14.93px] text-[#A0A0A0] text-start">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Form */}
        <div className="bg-transparent w-full lg:w-1/2">
          <h2 className="font-rubik text-center font-semibold text-xl text-[#CCE7F6] mb-4">
            Drop Your Message Below
          </h2>

          <form className="gap-8">
            <div className="flex flex-col w-full gap-5 mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-[#2A2A2A] rounded-lg focus:outline-none font-rubik text-[#9C9C9C] shadow-inner shadow-[0_0_4px_rgba(238,238,238,0.5)]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full p-3 bg-[#2A2A2A] rounded-lg focus:outline-none font-rubik text-[#9C9C9C] shadow-inner shadow-[0_0_4px_rgba(238,238,238,0.5)]"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 h-24 bg-[#2A2A2A] rounded-lg focus:outline-none resize-none font-rubik text-[#9C9C9C] shadow-inner shadow-[0_0_4px_rgba(238,238,238,0.5)]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-28 py-2 bg-[#CCE7F6] text-[#070B67] border border-[#2C00BE] rounded-[45px] font-rubik hover:bg-[#0ea5e9] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudioSupport;
