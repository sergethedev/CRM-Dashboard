import React from 'react';

const Navbar = () => {

  return (
    <div className="relative min-h-screen md:flex">

        <div className="sidebar bg-nav text-blue-100 w-64 space-y-3 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      
          <a href="#" className="text-white flex items-center space-x-2 px-4">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-2xl font-bold">Dashboard</span>
          </a>
      
          <nav>
          <a href="#" className="text-pinkText flex items-center space-x-2 py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {/* Profile icon path */}
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653Zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438ZM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0Z" clipRule="evenodd" />
            </svg>
            <span className="">Profile</span>
          </a>
          <hr className="border-t border-line my-2" />        
            <div>
            <a href="#" className="text-pinkText flex items-center space-x-2 py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {/* Reports icon path */}
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6Zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75Zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12Zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9Zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9Z" clipRule="evenodd" />
            </svg>
            <span className="">Reports</span>
          </a>
            <div className="py-2">
            <ul className="text-white text-sm pl-4 space-y-3">
              <li>Graphs</li>
              <li>Texts</li>
            </ul>
            </div>
            <hr className="border-t border-line my-2" />
            </div>
            <div>
            <a href="#" className="text-pinkText flex items-center space-x-2 py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {/* Channels icon path */}
              <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844Z" clipRule="evenodd" />
            </svg>
            <span className="">Messages</span>
            </a>
            <div className="py-2">
            <ul className="text-white text-sm pl-4 space-y-3">
              <li>Email</li>
              <li>Phone Call</li>
              <li>Online Chat</li>
            </ul>
            </div>
            </div>
            <hr className="border-t border-line my-2" />
            <div>
            <a href="#" className="text-pinkText flex items-center space-x-2 py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {/* Tickets icon path */}
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z" clipRule="evenodd" />
            </svg>
            <span className="">Tickets</span>
            </a>
            <div className="py-2">
            <ul className="text-white text-sm pl-4 space-y-3">
              <li>Created</li>
              <li>Open</li>
              <li>Responded</li>
              <li>Solved</li>
              <li>Other</li>
              <li>Deleted</li>
            </ul>
            </div>
            <hr className="border-t border-line my-2" />
            <button className="flex items-center bg-gradient-to-r from-pinkDarker to-pinkText text-white text-sm py-1 px-4 rounded-full ml-2 mt-5">
              Full Report
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-20">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
            </div>
          </nav>
        </div>
    </div>
  );
}

export default Navbar;