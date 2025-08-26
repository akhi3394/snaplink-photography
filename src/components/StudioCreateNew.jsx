import React from 'react';

const StudioCreateNew = () => {
  return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
      <h2 className="text-[28.88px] font-extrabold text-[#CCE7F6] mb-1 text-start">Create New Album</h2>
      <p className="text-[18.77px] font-semibold text-white mb-6 text-start">Create and customize your AniPicx album in just a few steps.</p>

      <div className="rounded-[12px] border border-[#40E0D0] p-6 max-h-[80vh] overflow-y-auto custom-scrollbar w-full">
        {/* Basic Album Info */}
        <h3 className="text-[20px] font-bold mb-4">Basic Album Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white text-sm font-medium mb-1">Album Title</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="Enter Album Title" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Event Type</label>
            <select className="p-3 rounded bg-white text-black w-full">
              <option>Select Event Type</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Client Name</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="Enter Client Name" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Event Date</label>
            <input type="date" className="p-3 rounded bg-white text-black w-full" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Client Contact</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="Enter Client Contact" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Album ID</label>
            <input className="p-3 rounded bg-[#ACBBD0] text-white w-full" value="ALB1903" disabled />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Album Orientation</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked className="toggle toggle-info" /> Portrait
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="toggle toggle-info" /> Landscape
              </label>
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Number of Pages</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="Number of Pages" />
          </div>
        </div>

        {/* Flip Type */}
        <div className="mb-6">
          <h3 className="text-[20px] font-bold mb-2">Flip Type</h3>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-500" /> Standard Flip
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-500" /> Book View
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-500" /> Single Scroll
            </label>
          </div>
        </div>

        {/* Upload Photos */}
        <h3 className="text-[20px] font-bold mb-4">Upload Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white text-sm font-medium mb-1">Upload Images</label>
            <div className="relative">
              <input className="p-3 pr-[110px] rounded bg-white text-black w-full" placeholder="Select upto max number of pages photos" />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#D9D9D9] px-3 py-1.5 rounded text-black text-sm">Select Media</button>
            </div>
          </div>
          <div className="col-span-1 flex gap-2 items-end">
            <div className="bg-white w-20 h-24 rounded flex items-center justify-center text-black">Img1</div>
            <div className="bg-white w-20 h-24 rounded flex items-center justify-center text-black">Img2</div>
            <div className="bg-white w-20 h-24 rounded flex items-center justify-center text-black">Img3</div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-white text-sm font-medium mb-1">Upload Song</label>
            <div className="relative mb-4">
              <input className="p-3 pr-[110px] rounded bg-white text-black w-full" placeholder="Upload song to play" />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#D9D9D9] px-3 py-1.5 rounded text-black text-sm">Select Song</button>
            </div>
            <label className="block text-white text-sm font-medium mb-1">Cover Photo Selection</label>
            <div className="relative">
              <input className="p-3 pr-[110px] rounded bg-white text-black w-full" placeholder="Upload of custom cover" />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#D9D9D9] px-3 py-1.5 rounded text-black text-sm">Select Media</button>
            </div>
          </div>
        </div>

        {/* Access Settings */}
        <h3 className="text-[20px] font-bold mb-4">Access & Sharing Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white text-sm font-medium mb-1">Generate QR Code</label>
            <input type="checkbox" checked className="toggle toggle-info" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Password Protect Album</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="If Yes Enter Password" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Set Expiry Date</label>
            <input type="date" className="p-3 rounded bg-white text-black w-full" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Add Watermark</label>
            <input className="p-3 rounded bg-white text-black w-full" placeholder="If Yes Enter Watermark" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Enable Downloads</label>
            <input type="checkbox" checked className="toggle toggle-info" />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Add Logo</label>
            <div className="relative">
              <input className="p-3 pr-[110px] rounded bg-white text-black w-full" placeholder="Add logo" />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#D9D9D9] px-3 py-1.5 rounded text-black text-sm">Select Media</button>
            </div>
          </div>
        </div>

        {/* Other Info */}
        <h3 className="text-[20px] font-bold mb-4">Other</h3>
        <label className="block text-white text-sm font-medium mb-1">Album Created On</label>
        <input type="date" className="p-3 rounded bg-white text-black mb-6 w-full" placeholder="Today Date" />

        <button className="w-full py-3 bg-gradient-to-r from-[#1FB6FF] to-[#009EE0] rounded-full font-bold text-white text-lg">Add Album</button>
      </div>
    </div>
  );
};

export default StudioCreateNew;
