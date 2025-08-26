import React, { useState } from "react";
import { Eye, Pencil, X } from "lucide-react";
import marriage1 from "../assets/marriage1.jpg";
import marriage2 from "../assets/marriage2.jpg";
import shareIcon from "/share.svg";
import qrIcon from "/qr.svg";
import { useNavigate } from "react-router-dom";

const StudioAllAlbums = () => {
  const [activeShareId, setActiveShareId] = useState(null);
  const [activeQRId, setActiveQRId] = useState(null);
  const navigate = useNavigate();

  const albums = [
    {
      id: 1,
      title: "Ravi_Ruchitha-Wedding2025",
      eventDate: "May 12, 2025",
      createdDate: "May 18, 2025",
      views: 104,
      image: marriage1,
    },
    {
      id: 2,
      title: "Sudha_Nachiketh-Wedding2025",
      eventDate: "May 13, 2025",
      createdDate: "May 20, 2025",
      views: 205,
      image: marriage2,
    },
  ];

  const handleAlbumClick = (albumId) => {
    navigate(`/dashboard/studio/album/${albumId}`);
  };

  return (
    <div className="p-4 text-white min-h-screen  relative">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 flex-wrap items-start lg:items-center mb-6">
        {/* Title and Subtitle */}
        <div className="flex-1">
          <h2 className="text-[28.88px] font-extrabold mb-1 text-start text-[#CCE7F6]">All Albums</h2>
          <p className="text-sm text-start text-[#B0B0B0]">
            View, manage, and share all your AniPicx albums in one place
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          {/* Text Input */}
          {/* Text Input with Search Icon */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search Your Album with Name"
              className="w-full px-10 py-2 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828282]">
              {/* Search SVG Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>


          {/* Date Input */}
          <div className="relative flex-1 min-w-[160px]">
            <input
              type="text"
              placeholder="Date"
              className="w-full py-2 px-4 bg-transparent border border-[#666666] rounded-[10px] text-white placeholder-[#828282] focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              {/* Date Icon */}
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
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-[#0E1D2D] border border-[#1A2A3C] rounded-xl shadow-lg overflow-hidden relative"
            onClick={() => handleAlbumClick(album.id)}
          >
            <div className="relative ">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-[160px] px-2 py-3 object-cover bg-no-repeat rounded-[20px]"
              />
              <div className="absolute top-5 right-5 flex items-center gap-2 text-white text-xs">
                <div className="flex items-center gap-1 bg-[#11384D66] bg-opacity-90 rounded-full px-2 py-1">
                  <Eye className="w-4 h-4" />
                  <span>{album.views} views</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-7 bg-[#11384D66] bg-opacity-90 p-1 rounded-full">
                <Pencil className="w-4 h-4 text-white cursor-pointer" onClick={() => navigate(`/dashboard/studio/edit-album/${album.id}`)} />
              </div>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-sm font-semibold truncate">
                {album.title}
              </h3>
              <p className="text-xs text-[#CCE7F6] text-start">
                Event Date : {album.eventDate}
              </p>
              <p className="text-xs text-[#CCE7F6] mb-3 text-start">
                Album Created On: {album.createdDate}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveShareId(album.id)}
                  className="flex-1 bg-[#1C849F] hover:bg-[#106cd6] text-white text-xs font-semibold py-2 rounded flex items-center justify-center gap-2"
                >
                  <img src={shareIcon} className="w-4 h-4" alt="Share" />
                  Share Link
                </button>
                <button
                  onClick={() => setActiveQRId(album.id)}
                  className="flex-1 bg-[#1C849F] hover:bg-[#233747] text-white text-xs font-semibold py-2 rounded border border-[#2E3C4C] flex items-center justify-center gap-2"
                >
                  <img src={qrIcon} className="w-4 h-4" alt="QR" />
                  Show QR
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Create Album Card */}
        <div className="bg-[#0E1D2D] border border-[#1A2A3C] rounded-xl flex items-center justify-center min-h-[250px]">
          <button className="flex flex-col items-center justify-center text-white">
            <div className="text-4xl mb-2">＋</div>
            <div className="text-sm font-medium">Create New Album</div>
          </button>
        </div>
      </div>

      {/* Share Link Modal (Bottom) */}
      {activeShareId && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0E1D2D] border border-[#1A2A3C] w-[340px] sm:w-[420px] rounded-xl px-5 py-4 shadow-xl z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-white text-sm">Share Link Via</h3>
            <X
              className="cursor-pointer text-white w-4 h-4"
              onClick={() => setActiveShareId(null)}
            />
          </div>
          <div className="bg-[#1C2B3A] px-3 py-2 rounded mb-4 text-xs text-gray-200">
            Copy Link
          </div>
          <div className="flex justify-between items-center gap-4 text-xs font-medium">
            <button className="flex flex-col items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                alt="whatsapp"
                className="w-8 h-8"
              />
              WhatsApp
            </button>
            <button className="flex flex-col items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="instagram"
                className="w-8 h-8"
              />
              Instagram
            </button>
            <button className="flex flex-col items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
                className="w-8 h-8"
              />
              Email
            </button>
            <button className="flex flex-col items-center gap-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="facebook"
                className="w-8 h-8"
              />
              Facebook
            </button>
          </div>
        </div>
      )}

      {/* QR Modal (Center) */}
      {activeQRId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl px-6 py-4 w-[300px] text-center relative">
            <X
              className="absolute top-3 right-3 cursor-pointer text-black"
              onClick={() => setActiveQRId(null)}
            />
            <h3 className="text-lg font-bold text-[#1D4ED8] mb-1">Show QR</h3>
            <p className="text-sm text-gray-700 mb-4">
              {
                albums.find((album) => album.id === activeQRId)?.title
              }
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
              alt="QR Code"
              className="mx-auto mb-4 border-4 border-[#DBEAFE] p-1"
            />
            <div className="flex justify-around mt-2 text-sm font-semibold">
              <button className="text-blue-600">Download QR</button>
              <button className="text-blue-600">Share QR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioAllAlbums;
