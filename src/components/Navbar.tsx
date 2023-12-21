import React from 'react';

const Navbar = () => {

  return (
    <div className="relative min-h-screen md:flex">

        <div className="sidebar bg-nav text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      
          <a href="#" className="text-white flex items-center space-x-2 px-4">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-2xl font-bold">Dashboard</span>
          </a>
      
          <nav>
            <a href="#" className="text-pinkText block py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Profile
            </a>
            <hr className="border-t border-gray-300 my-2" />            
            <div>
              <a href="" className="text-pinkText block py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Reports
            </a>
            <div className="py-2">
            <ul className="text-white text-sm pl-4 space-y-3">
              <li>Graphs</li>
              <li>Texts</li>
            </ul>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            </div>
            <div>
            <a href="" className="text-pinkText block py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Channels
            </a>
            <div className="py-2">
            <ul className="text-white text-sm pl-4 space-y-3">
              <li>Email</li>
              <li>Phone Call</li>
              <li>Online Chat</li>
            </ul>
            </div>
            </div>
            <hr className="border-t border-gray-300 my-2" />
            <div>
            <a href="" className="text-pinkText block py-1.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
              Ticket Status
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
            </div>
          </nav>
        </div>
        </div>
  );
}

export default Navbar;




