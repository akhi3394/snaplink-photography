import React from 'react'
import { useNavigate } from 'react-router-dom'

const LabAddAlbum = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/backSvg.svg"
          alt="Back"
          className="w-8 h-8 cursor-pointer"
          onClick={handleBack}
        />
        <div>
          <h1 className="text-[28.88px] font-extrabold font-rubik text-[#CCE7F6] leading-tight text-start">
            Create New Album
          </h1>
          <p className="text-sm text-[#B0B0B0] mt-1 font-rubik">
            Create and customize your AniPicx album in just a few steps.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="border border-[#40E0D0] rounded-[12px] px-6 py-8 w-full">
        {/* Section: Select Photographer */}
        <h2 className=" font-rubik font-semibold mb-4 text-[#CCE7F6] text-start text-[29.6px]">
          Select Photographer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-start">
          <div>
            <label className="text-sm block mb-1">Photographer Name</label>
            <select className="w-full bg-white text-black rounded-md px-4 py-2 text-sm">
              <option>Select Photographer</option>
            </select>
          </div>
          <div>
            <label className="text-sm block mb-1">Photographer Contact</label>
            <input
              type="text"
              placeholder="Photographer Contact (AutoFill)"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Section: Basic Album Info */}
        <h2 className="text-[18px] font-semibold mb-4 text-[#CCE7F6] text-start">
          Basic Album Info
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-start">
          <div>
            <label className="text-sm block mb-1">Album Title</label>
            <input
              type="text"
              placeholder="Enter Album Title"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Event Type</label>
            <select className="w-full bg-white text-black rounded-md px-4 py-2 text-sm">
              <option>Select Event Type</option>
            </select>
          </div>
          <div>
            <label className="text-sm block mb-1">Client Name</label>
            <input
              type="text"
              placeholder="Enter Client Name"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Client Contact</label>
            <input
              type="text"
              placeholder="Enter Client Contact"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Album ID</label>
            <input
              type="text"
              value="ALB1903"
              disabled
              className="w-full bg-[#AAB7C6] text-white rounded-md px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Section: Album Layout Options */}
        <h2 className="text-[18px] font-semibold mb-4 text-[#CCE7F6]">
          Album Layout Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm block mb-1">Album Orientation</label>
            <div className="flex gap-3">
              <button className="bg-white text-black text-sm px-4 py-2 rounded-md">
                Portrait
              </button>
              <button className="border border-white text-sm px-4 py-2 rounded-md">
                Landscape
              </button>
            </div>
          </div>
          <div>
            <label className="text-sm block mb-1">Number of Pages</label>
            <input
              type="number"
              placeholder="0"
              className="w-full bg-white text-black rounded-md px-4 py-2 text-sm"
            />
          </div>
        </div>

        {/* Section: Flip Type */}
        <div className="mb-6">
          <label className="text-sm block mb-2">Flip Type</label>
          <div className="flex flex-wrap gap-5 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1E83B9]" defaultChecked />
              Standard Flip
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1E83B9]" />
              Book View
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1E83B9]" />
              Single Scroll
            </label>
          </div>
        </div>

        {/* Upload Section */}
        <h3 className="text-[18px] font-semibold mb-3 text-[#CCE7F6]">Upload Photos</h3>
        <div className="border border-dashed border-[#666] rounded-lg h-32 flex items-center justify-center text-sm text-gray-400">
          Drop or select files to upload...
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-2 text-white font-semibold rounded-[8px] text-sm"
            style={{
              background:
                'linear-gradient(0deg, #070B67, #070B67), linear-gradient(100.44deg, #E2F5FF 7.78%, #1E83B9 106.53%)',
              boxShadow: '0px 9px 4px 0px #00000040',
            }}
          >
            Add Album
          </button>
        </div>
      </div>
    </div>
  )
}

export default LabAddAlbum
