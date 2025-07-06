import React, { useState } from 'react';
import { Eye, Pencil, X } from "lucide-react";
import marriage1 from "../assets/marriage1.jpg";
import marriage2 from "../assets/marriage2.jpg";
import shareIcon from "/share.svg";
import qrIcon from "/qr.svg";
import { useNavigate } from "react-router-dom";

const LabAlbums = () => {
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
    navigate(`/dashboard/lab/album/${albumId}`);
  };


  return (
    <div className="p-4 text-white min-h-screen  relative">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 flex-wrap items-start lg:items-center mb-6">
        {/* Title and Subtitle */}
        <div className="flex-1">
          <h2 className="text-[28.88px] font-extrabold mb-1 text-start text-[#CCE7F6]">All Albums</h2>
          <p className="text-sm text-start text-[#B0B0B0]">
            View, manage, and share all your Snaplink albums in one place
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          <button className=' px-5 py-2 rounded-[8px] text-[#070B67] font-rubik font-semibold'
            style={{
              background: `linear-gradient(0deg, #E2F5FF, #1E83B9), linear-gradient(100.44deg, #E2F5FF 7.78%, #1E83B9 106.53%)`,
              boxShadow: '0px 9px 4px 0px #00000040',
            }}
            onClick={()=>navigate('/dashboard/lab/add-album')}
            >Add Album</button>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-[#0E1D2D] border border-[#1A2A3C] rounded-xl shadow-lg overflow-hidden relative"

          >
            <div className="relative ">
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-[160px] px-2 py-3 object-cover bg-no-repeat rounded-[20px]"
                onClick={() => handleAlbumClick(album.id)}
              />
              <div className="absolute top-5 right-5 flex items-center gap-2 text-white text-xs">
                <div className="flex items-center gap-1 bg-[#11384D66] bg-opacity-90 rounded-full px-2 py-1">
                  <Eye className="w-4 h-4" />
                  <span>{album.views} views</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-7 bg-[#11384D66] bg-opacity-90 p-1 rounded-full">
                <Pencil className="w-4 h-4 text-white cursor-pointer" onClick={() => navigate(`/dashboard/lab/edit-album/${album.id}`)} />
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

export default LabAlbums;