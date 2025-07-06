import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const LabEditAlbum = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const albums = [
        {
            id: '1',
            title: 'Ravi_Ruchitha-Wedding2025',
            eventType: 'Wedding',
            clientName: 'Ravi Kumar',
            clientContact: '+91-99804 99343',
            eventDate: 'Sat, May 12, 2025',
            albumId: 'ALB8932',
            pages: 50,
        },
        {
            id: '2',
            title: 'Sudha_Nachiketh-Wedding2025',
            eventType: 'Wedding',
            clientName: 'Nachiketh',
            clientContact: '+91-98888 12345',
            eventDate: 'May 13, 2025',
            albumId: 'ALB8933',
            pages: 60,
        }
    ];

    const album = albums.find((a) => a.id === id);
    if (!album) return <div className="text-white p-6">Album not found</div>;

    return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
            <div className="flex gap-5 ">
                <img
                    src="/backSvg.svg"
                    alt="Back"
                    className="w-10 h-10 cursor-pointer"
                    onClick={handleBack}
                />
                <h2 className="text-3xl font-bold mb-6 text-[#CCE7F6] ">Edit Album Details</h2>
            </div>
            <div className="rounded-[12px] border border-[#40E0D0] p-6 max-h-[80vh] overflow-y-auto custom-scrollbar w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
                    <div>
                        <label className="text-sm mb-1 block">Album Title</label>
                        <input
                            type="text"
                            defaultValue={album.title}
                            className="w-full bg-white text-black rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Event Type</label>
                        <select className="w-full bg-white text-black rounded-lg px-4 py-2">
                            <option>Wedding</option>
                            <option>Birthday</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Client Name</label>
                        <input
                            type="text"
                            defaultValue={album.clientName}
                            className="w-full bg-white text-black rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Event Date</label>
                        <input
                            type="text"
                            defaultValue={album.eventDate}
                            className="w-full bg-white text-black rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Client Contact</label>
                        <input
                            type="text"
                            defaultValue={album.clientContact}
                            className="w-full bg-white text-black rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Album ID</label>
                        <input
                            type="text"
                            value={album.albumId}
                            disabled
                            className="w-full bg-[#AAB7C6] text-white rounded-lg px-4 py-2"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="text-sm mb-1 block">Album Orientation</label>
                        <div className="flex gap-2">
                            <button className="bg-white text-black px-3 py-1 rounded">Portrait</button>
                            <button className="bg-transparent border px-3 py-1 rounded">Landscape</button>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm mb-1 block">Number of Pages</label>
                        <input
                            type="number"
                            defaultValue={album.pages}
                            className="w-full bg-white text-black rounded-lg px-4 py-2"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-sm block mb-2">Flip Type</label>
                    <div className="flex gap-4 text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-600" defaultChecked />
                            Standard Flip
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-600" />
                            Book View
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-600" />
                            Single Scroll
                        </label>
                    </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[#CCE7F6]">Upload Photos</h3>
                <div className="border border-dashed rounded-lg h-32 flex items-center justify-center text-sm text-gray-400">
                    Drop or select files to upload...
                </div>
            </div>
        </div>
    )
}

export default LabEditAlbum
