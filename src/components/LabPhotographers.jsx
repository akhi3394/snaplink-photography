import React from 'react'
import { Pencil } from 'lucide-react'
import dummyProfile from '/dummyProfile.svg'; // Replace with actual image path


const photographers = [
  {
    id: 1,
    name: 'Framewala Studio',
    proprietor: 'Bharath K',
    email: 'contact@framewala.in',
    lastActive: '5 days ago',
    image: dummyProfile, // Replace with actual path
  },
  {
    id: 2,
    name: 'Pixel Vibe Studio',
    proprietor: 'Divya',
    email: 'pixelvibe@gmail.com',
    lastActive: '10 days ago',
    image: dummyProfile,
  },
  {
    id: 3,
    name: 'ShutterCraft',
    proprietor: 'Divansh',
    email: 'studio@shuttercraft.com',
    lastActive: 'Today',
    image: dummyProfile,
  },
  {
    id: 4,
    name: 'FocusGram Studio',
    proprietor: 'Rahul Jain',
    email: 'focusgram@yahoo.com',
    lastActive: '3 days ago',
    image: dummyProfile,
  },
]

const LabPhotographers = () => {
  return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
      <div className="flex justify-between items-center mb-8" >
        <div>
          <h1 className="text-[28.88px] font-extrabold text-start text-[#CCE7F6]">All Photographers</h1>
          <p className="text-sm text-[#B0B0B0] mt-1 text-start">
            View, manage, and share all your AniPicx albums in one place.
          </p>
        </div>
        <button className=" text-[#070B67] px-5 py-2 rounded-lg text-sm font-medium shadow-md"
          style={{
            background: `linear-gradient(0deg, #E2F5FF, #1E83B9), linear-gradient(100.44deg, #E2F5FF 7.78%, #1E83B9 106.53%)`,
            boxShadow: '0px 9px 4px 0px #00000040',
          }}>
          Add Photographer
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {photographers.map((photographer) => (
          <div
            key={photographer.id}
            className="relative  rounded-xl p-5 shadow-md border border-blue-900"
             style={{
    background: 'linear-gradient(198.17deg, #00263A 12.35%, #070C0E 264.28%)',
  }}
          >
            <div className="absolute top-3 right-3">
              <button className=" p-1.5 rounded-[8px]"
                style={{
                  background: `linear-gradient(0deg, #E2F5FF, #1E83B9), linear-gradient(100.44deg, #E2F5FF 7.78%, #1E83B9 106.53%)`,
                  boxShadow: '0px 9px 4px 0px #00000040',
                }}
              >
                <Pencil className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={photographer.image}
                alt={photographer.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{photographer.name}</h2>
              <p className="text-sm text-gray-300 mt-1">
                Proprietor: {photographer.proprietor}
              </p>
              <p className="text-sm text-gray-400">{photographer.email}</p>
              <p className="text-sm text-gray-500 mt-2">
                Last Active: {photographer.lastActive}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LabPhotographers
