import React from 'react';
import dummyProfile from '/dummyProfile.svg'; // Replace with actual image path
import {
    FaWhatsapp,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa';
import { Pencil } from 'lucide-react';

const socialLinks = [
    { name: 'WhatsApp', status: 'Link', color: 'text-green-400', icon: <FaWhatsapp /> },
    { name: 'Facebook', status: 'Not Set', color: 'text-red-500', icon: <FaFacebookF /> },
    { name: 'Twitter', status: 'Not Set', color: 'text-red-500', icon: <FaTwitter /> },
    { name: 'YouTube', status: 'Link', color: 'text-green-400', icon: <FaYoutube /> },
    { name: 'Instagram', status: 'Link', color: 'text-green-400', icon: <FaInstagram /> },
];

const StudioProfile = () => {
    return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl w-full">
                {/* Profile Card */}
                <div className=" rounded-xl p-6 flex flex-col items-center relative shadow-md" 
                 style={{
                    background: 'linear-gradient(198.17deg, rgba(0, 38, 58, 0.9) 12.35%, rgba(7, 12, 14, 0.9) 264.28%)',
                    boxShadow: '4px 4px 6.2px 0px rgba(0, 0, 0, 0.25)',
                }}
                >
                    <img src={dummyProfile} alt="Profile" className="w-[90px] h-[90px] rounded-full border-4 border-white" />
                    <h2 className="text-white text-lg font-semibold mt-4">Neeraj Gupta</h2>
                    <p className="text-sm text-gray-300 mt-1 text-center leading-5">
                        Digiplex Studio • 9982333954<br />
                        digiplex12@gmail.com<br />
                        Aligarh, UP, IN
                    </p>
                    <span className="absolute top-3 right-3 cursor-pointer text-white text-sm">
                        <Pencil />
                    </span>
                </div>

                {/* Personal Information */}
                <div className=" rounded-xl p-6 text-white shadow-md" 
                 style={{
                    background: 'linear-gradient(198.17deg, rgba(0, 38, 58, 0.9) 12.35%, rgba(7, 12, 14, 0.9) 264.28%)',
                    boxShadow: '4px 4px 6.2px 0px rgba(0, 0, 0, 0.25)',
                }}
                >
                    <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
                    <div className="text-sm divide-y divide-gray-700">
                        <div className="flex justify-between py-2"><span className="text-[#BFBEFF]">Full Name :</span> <span>Neeraj Gupta</span></div>
                        <div className="flex justify-between py-2"><span className="text-[#BFBEFF]">Lab Name :</span> <span>Digiplex Studio</span></div>
                        <div className="flex justify-between py-2"><span className="text-[#BFBEFF]">Mobile No :</span> <span>+91 9982333954</span></div>
                        <div className="flex justify-between py-2"><span className="text-[#BFBEFF]">Email :</span> <span>digiplex12@gmail.com</span></div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className=" rounded-xl p-6 text-white shadow-md relative" 
                 style={{
                    background: 'linear-gradient(198.17deg, rgba(0, 38, 58, 0.9) 12.35%, rgba(7, 12, 14, 0.9) 264.28%)',
                    boxShadow: '4px 4px 6.2px 0px rgba(0, 0, 0, 0.25)',
                }}
                >
                    <h3 className="font-semibold text-lg mb-4">Social Media Links</h3>
                    <div className="space-y-2">
                        {socialLinks.map((link, index) => (
                            <div key={index} className="flex items-center justify-between   rounded-lg">
                                <span className="flex items-center gap-2 text-[#052649] font-medium bg-white px-4 py-2 w-[160px] rounded-[10px]">
                                    {link.icon}
                                    <span className="capitalize">{link.name}</span>
                                </span>
                                <span className={`text-sm font-medium ${link.color}`}>{link.status}</span>
                            </div>
                        ))}
                    </div>
                    <span className="absolute top-3 right-3 cursor-pointer text-white text-sm"> <Pencil /></span>
                </div>

                {/* Plan Details */}
                <div className=" rounded-xl p-6 text-white shadow-md" 
                 style={{
                    background: 'linear-gradient(198.17deg, rgba(0, 38, 58, 0.9) 12.35%, rgba(7, 12, 14, 0.9) 264.28%)',
                    boxShadow: '4px 4px 6.2px 0px rgba(0, 0, 0, 0.25)',
                }}
                >
                    <h3 className="font-semibold text-lg mb-4">Plan Details</h3>
                    <div className="border-b border-b-[#8785EB]"></div>
                    <div className="text-sm divide-y divide-gray-700">
                        <div className="flex justify-between py-2"><span className="text-gray-400">Active Plan :</span> <span>GOLD</span></div>
                        <div className="flex justify-between py-2"><span className="text-gray-400">Recharge Date :</span> <span>15/06/2025</span></div>
                        <div className="flex justify-between py-2"><span className="text-gray-400">Credits Left :</span> <span>1 Credits Left</span></div>
                        <div className="flex justify-between py-2"><span className="text-gray-400">Expire On :</span> <span>26/06/2025</span></div>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button className="bg-[#CCE7F6] text-[#070B67] font-semibold px-6 py-2 rounded-md">Update Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioProfile;
