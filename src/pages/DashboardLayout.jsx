import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/Navbar/Logo.png';
import dashboardBG from '../assets/DashboardBG.jpg';
import DashboardIcon from '/dashboard.svg';
import AllAlbumsIcon from '/allAlbumbs.svg';
import CreateNewIcon from '/createNew.svg';
import ManageCreditsIcon from '/manageCredits.svg';
import SupportIcon from '/support.svg';
import PhotographersIcon from '/photographers.svg';
import LabSupportIcon from '/labSupport.svg';
import LogoutIcon from '/logout.svg';
import Notification from '/notifications.svg';
import Profile from '/dummyProfile.svg';

//active icons 
import ActiveDashboardIcon from '/activeDashboard.svg';
import ActiveAlbumsIcon from '/ActiveAllAlbumsIcon.svg';
import ActiveCreateNewIcon from '/ActiveCreateNewIcon.svg';
import ActiveManageCreditsIcon from '/ActiveManageCreditsIcon.svg';
import ActiveSupportIcon from '/ActiveSupportIcon.svg';
import ActivePhotographersIcon from '/ActivePhotographersIcon.svg';
import ActiveLabSupportIcon from '/ActiveLabSupportIcon.svg';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const notificationRef = useRef(null);
  const iconRef = useRef(null);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/dashboard/studio/profile');
  };

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sidebarItems = {
    studio: [
      { path: '/dashboard/studio', label: 'Dashboard', icon: DashboardIcon, ActiveIcon: ActiveDashboardIcon },
      { path: '/dashboard/studio/all-albums', label: 'All Albums', icon: AllAlbumsIcon, ActiveIcon: ActiveAlbumsIcon },
      { path: '/dashboard/studio/create-new', label: 'Create New', icon: CreateNewIcon, ActiveIcon: ActiveCreateNewIcon },
      { path: '/dashboard/studio/manage-credits', label: 'Manage Credits', icon: ManageCreditsIcon, ActiveIcon: ActiveManageCreditsIcon },
      { path: '/dashboard/studio/support', label: 'Support', icon: SupportIcon, ActiveIcon: ActiveSupportIcon },
    ],
    lab: [
      { path: '/dashboard/lab', label: 'Dashboard', icon: DashboardIcon, ActiveIcon: ActiveDashboardIcon },
      { path: '/dashboard/lab/albums', label: 'Albums', icon: AllAlbumsIcon, ActiveIcon: ActiveAlbumsIcon },
      { path: '/dashboard/lab/photographers', label: 'Photographers', icon: PhotographersIcon, ActiveIcon: ActivePhotographersIcon },
      { path: '/dashboard/lab/credits', label: 'Credits', icon: ManageCreditsIcon, ActiveIcon: ActiveManageCreditsIcon },
      { path: '/dashboard/lab/support-contact', label: 'Support/Contact', icon: LabSupportIcon, ActiveIcon: ActiveLabSupportIcon },
    ],
  };

  const userType = location.pathname.includes('/studio') ? 'studio' : 'lab';
  const currentItems = sidebarItems[userType];

  return (
    <div
      className="flex h-screen overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${dashboardBG})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Sidebar (Desktop + Mobile Slide-in) */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-[260px] p-4 flex flex-col backdrop-blur-[2px] transform transition-transform duration-300 z-50
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        style={{
          background: 'linear-gradient(198.17deg, rgba(0, 38, 58, 0.9) 12.35%, rgba(7, 12, 14, 0.9) 264.28%)',
          boxShadow: '4px 4px 6.2px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Close Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl self-end mb-4"
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>

        <div className="">
          <img src={Logo} alt="AniPicx Logo" className="w-[260px] h-[250px]" />
          {/* <p className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-[#CCE7F6] font-serif">
            AniPicx
          </p> */}
        </div>

        <nav className="space-y-4 flex-grow">
          {currentItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false); // close on mobile navigation
                }}
                className={`flex items-center text-[16px] md:text-[18px] font-rubik font-medium px-4 py-2 md:px-5 md:py-3 w-full border border-[#085DA3] rounded-[9px] cursor-pointer ${isActive ? 'bg-[#CCE7F6] text-[#070B67]' : 'text-white hover:bg-blue-700'
                  }`}
              >
                <img
                  src={isActive ? item.ActiveIcon : item.icon}
                  alt={`${item.label} Icon`}
                  className="w-5 h-5 mr-2"
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center p-2 bg-transparent border border-[#085DA3] rounded-[12px] text-white mt-4"
        >
          <img src={LogoutIcon} alt="Logout Icon" className="w-5 h-5 mr-2" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div
          className="p-4 flex justify-between items-center h-[70px] md:h-[101px] relative"
          style={{
            background: 'linear-gradient(0deg, #1C1C1C, #1C1C1C), linear-gradient(269.65deg, #00263A -0.92%, #070C0E 139.26%)',
            boxShadow: '0px 9px 51.8px 0px #1D070769',
          }}
        >
          {/* Hamburger (Mobile only) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h2 className="text-lg md:text-xl font-semibold text-white">
            {/* {location.pathname.includes('studio') ? 'Studio Dashboard' : 'Lab Dashboard'} */}
          </h2>

          <div className="flex items-center space-x-4 relative">
            <img
              src={Notification}
              alt="notification"
              className="cursor-pointer w-6 h-6"
              ref={iconRef}
              onClick={toggleNotification}
            />

            {/* Notification Dropdown */}
            {showNotification && (
              <div
                ref={notificationRef}
                className="absolute right-0 top-[60px] z-50 w-[280px] md:w-[340px] rounded-[16px] text-white p-4 shadow-lg"
                style={{
                  background: 'linear-gradient(198.17deg, #00263A 12.35%, #070C0E 264.28%)',
                  border: '0.61px solid',
                  borderImage: 'linear-gradient(123.05deg, #1E74A3 -12.86%, #244E64 69.71%) 1',
                  borderRadius: '16px',
                }}
              >
                <div className="flex justify-center items-center relative mb-2">
                  <h2 className="text-[16px] md:text-[18px] font-semibold text-white text-center">Notifications</h2>
                  <button
                    onClick={() => setShowNotification(false)}
                    className="absolute right-0 -top-6 text-white text-[30px] md:text-[40px]"
                  >
                    ×
                  </button>
                </div>

                <div className="border-b border-gray-400 opacity-30 mb-2" />

                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs md:text-sm text-[#FF0000] font-medium">1 Notification Found</p>
                  <button className="text-xs md:text-sm text-white opacity-70 hover:underline">Clear All</button>
                </div>

                <div
                  className="p-3 rounded-[10px]"
                  style={{
                    background: 'linear-gradient(90.38deg, #05486B -7.69%, #010934 99.67%)',
                    border: '1px solid',
                    borderColor: '#1E2D3D',
                  }}
                >
                  <p className="text-[10px] md:text-[12px] text-[#FFFFFF] opacity-60 mb-1 text-start">10Min Ago</p>
                  <p className="text-[13px] md:text-[14px] text-white leading-tight text-start">
                    Album <span className="text-[#00C2FF] font-medium">'Portfolio_Models'</span> got 38 new views
                  </p>
                </div>
              </div>
            )}

            <img
              src={Profile}
              alt="Profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-2 md:p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
