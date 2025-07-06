import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import marriage1 from "../assets/marriage1.jpg";
import marriage2 from "../assets/marriage2.jpg";
import dashboardBG from '../assets/DashboardBG.jpg';
import approved from '/approved.svg'
import shareIcon from "/share.svg";
import qrIcon from "/qr.svg";
import { Eye, Pencil, X } from "lucide-react";

const LabAlbumView = () => {
    const { albumId } = useParams();
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="min-h-screen bg-[#000] text-white px-10 py-6 font-sans relative"
            style={{
                backgroundImage: `url(${dashboardBG})`,
            }}>
            <div className="relative text-white px-8 py-6 rounded-md mb-10">
                {/* Back Icon - fixed to left */}
                <div className="absolute top-6 left-6 cursor-pointer" onClick={handleBack}>
                    <img src="/normalBack.svg" alt="Back" className="w-8 h-8" />
                </div>

                {/* Main Row */}
                <div className="flex items-center justify-end xl:gap-56">
                    {/* Center Info */}
                    <div className="flex gap-14 text-[15.3px] text-[#CCE7F6]">
                        <span>Client Name: <strong>Ravi Kumar</strong></span>
                        <span>Client Contact: <strong>+91-99804 99343</strong></span>
                        <span>Album ID: <strong>ALB9832</strong></span>
                        <span>Event Type: <strong>Wedding</strong></span>
                    </div>

                    {/* Song Info */}
                    <div className="   flex flex-col items-center gap-2 px-4 py-8 bg-[#17263FB8] rounded-lg shadow-sm">
                        <img src="/play.svg" alt="play icon" className="w-4 h-4" />
                        <span className="text-xs">Song: <strong>tere__hawale.mp3</strong></span>
                    </div>
                </div>
            </div>

            {/* Mid Grid */}
            <div className="flex justify-between items-start">
                {/* Left Details */}
                <div className="text-sm space-y-3 ">
                    <p className="text-xl font-bold italic">Total 5 Pages</p>

                    <div className="flex items-center gap-2">
                        <img src="/albumOrientation.svg" alt="orientation" className="w-5 h-5" />
                        <span>Album Orientation: <strong>Portrait</strong></span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/location.svg" alt="location" className="w-5 h-5" />
                        <span>Flip Type: <strong>Standard Flip</strong></span>
                    </div>
                </div>

                {/* Center Album Block */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-1 italic">Ravi_Ruchita-Wedding2025</h2>
                    <p className="text-sm mb-4">Date: Sat, May 12, 2025</p>

                </div>

                {/* Right Share Info */}
                <div className="text-sm space-y-3 text-right">
                    <p className="text-xl font-bold italic">Total Shared</p>
                    <div className="flex items-center justify-end gap-2">
                        <img src="/eye.svg" alt="views" className="w-4 h-4" />
                        <span>140 Views</span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <img src="/share2.svg" alt="shared" className="w-4 h-4" />
                        <span>150 Shared</span>
                    </div>
                </div>
            </div>

            {/* Album View (Side-by-side images) */}
            <div className="relative w-[640px] flex justify-center mx-auto h-[350px] overflow-hidden rounded shadow-xl mb-10">
                {/* Background Album Image */}
                <img
                    src={marriage1}
                    alt="Album Page"
                    className="w-full h-full object-cover"
                />
                {/* Overlay smaller album preview */}
                <div className="absolute bottom-4 left-4 w-40 h-28 border-2 border-white rounded overflow-hidden shadow-lg">
                    <img
                        src={marriage2}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Approved Badge */}
            <img
                src={approved}
                alt="Approved"
                className="w-[41px] h-[41px] mt-3 mx-auto"
            />
            {/* Action Buttons */}
            <div className="flex justify-center mt-10 gap-6">
                <button className="bg-[#61BBE7] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-300">

                    <span className='flex items-center gap-2'>
                        <span><Pencil /></span>
                        Edit Album
                    </span>
                </button>
                <button className="bg-[#61BBE7] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-300">

                    <span className='flex items-center gap-2'>
                        <span><img src={shareIcon} alt="share" /></span>
                        Share Link
                    </span>



                </button>
                <button className="bg-[#61BBE7] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-300">
                    <span className='flex items-center gap-2'>
                        <span><img src={qrIcon} alt="qr" /></span>
                        Show QR
                    </span>

                </button>
            </div>
        </div>
    )
}

export default LabAlbumView
