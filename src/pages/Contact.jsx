import React from 'react';
import ContactBG from '../assets/ContactUs.jpg';
import phone from '../assets/mobileIcon.png';
import email from '../assets/emailIcon.png';
import Location from '../assets/LocationPinIcon.png';
import weChat from '../assets/wechat.png';
import Camera1 from '../assets/CameraContactus.png';
import Camera2 from '../assets/Camera2.png';

const Contact = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${ContactBG})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10  mt-[110px] w-full max-w-xl p-8 bg-[#1C1C1C]  border border-white rounded-2xl">
        {/* Camera1 Image (Right Side Fixed) */}
        {/* Camera1 Image (Backside & Right Positioned) */}
        <div className="absolute -z-0 right-[-250px] top-1/2 -translate-y-1/2">
          <img src={Camera1} alt="Camera1" className="w-[300px] h-auto opacity-50" />
        </div>


        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-rubik font-bold text-4xl text-[#CCE7F6]">
            Contact Us
          </h1>
          <p className="font-rubik italic text-sm text-[#7D7D7D]">
            From setup to sharing – we’ve got your 3D albums covered.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {[
            {
              icon: phone,
              label: 'Phone',
              text: '+91 89336 92152',
            },
            {
              icon: email,
              label: 'Email',
              text: 'support@companyemail.com',
            },
            {
              icon: Location,
              label: 'Address',
              text: 'Address Company Address Here with PIN',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#2A2A2A] p-4 rounded-lg shadow-[0_4px_4px_rgba(238,238,238,0.5),0_0_4px_rgba(0,0,0,0.25)]"
            >
              <img src={item.icon} alt="icon" className="w-[44.79px] h-[44.79px] mr-3" />
              <div className="flex flex-col">
                <span className="font-rubik font-semibold text-xl text-start text-[17.91px] text-[#CCE7F6]">
                  {item.label}
                </span>
                <span className="font-rubik font-semibold text-xl text-start text-[14.93px] text-[#A0A0A0]">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-white via-[#95FFF1] to-white mb-6" />

        {/* Contact Form */}
        <div className="bg-transparent">
          <h2 className="font-rubik font-semibold text-xl text-[#CCE7F6] mb-4">
            Drop Your Message Below
          </h2>

          <form className="flex gap-8">
            {/* Left Side Inputs */}
            <div className="flex flex-col w-3/4 gap-5">
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

            {/* Right Side WeChat and Button */}
            <div className="flex flex-col justify-between items-center w-1/4">
              <img src={weChat} alt="WeChat" className="w-[76px] h-[76px]" />
              <button
                type="submit"
                className="w-28 py-2 bg-[#CCE7F6] text-[#070B67] border border-[#2C00BE] rounded-[45px] font-rubik hover:bg-[#0ea5e9] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Camera2 */}
        <div className="fixed bottom-0 left-0">
          <img
            src={Camera2}
            alt="Camera2"
            className="w-40 h-auto brightness-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
