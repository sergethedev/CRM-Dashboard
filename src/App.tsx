import React from 'react';
import logo from './logo.svg';
import DashboardLayout from './layouts/DashboardLayout';
import './App.css';

function App() {
  return (
    /*
    
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-2 bg-blue-500 h-32 rounded-2xl"></div>
      <div className="col-span-2 bg-red-500 h-32 rounded-2xl"></div>
      <div className="col-span-2 bg-green-500 h-32 rounded-2xl"></div>


      <div className="col-span-3 bg-purple-500 h-32 rounded-2xl"></div>
      <div className="col-span-3 bg-pink-500 h-32 rounded-2xl"></div>

      <div className="flex flex-col">
        <div className="bg-teal-500 h-800 rounded-2xl m-4 flex-1"></div>
        <div className="bg-orange-500 h-80 rounded-2xl m-4 flex-1"></div>
      </div>
    </div>
   */
    <div className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6 bg-gray-800"></div>
        {/* Grid Section */}
        <div className="grid grid-cols-6 gap-7 w-3/5 mt-30 mb-30 ml-10">
          {/* First Row: Three Items, each taking two of the six columns */}
          <div className="col-span-2 bg-blue-500 h-15 rounded-2xl flex-shrink"></div>
          <div className="col-span-2 bg-red-500 h-15 rounded-2xl flex-shrink"></div>
          <div className="col-span-2 bg-green-500 h-15 rounded-2xl flex-shrink"></div>

          {/* Second Row: One Large Item spanning all six columns */}
          <div className="col-span-6 bg-yellow-500 h-85 rounded-2xl flex-grow"></div>

          {/* Third Row: Two Items, each taking three of the six columns */}
          <div className="col-span-3 bg-purple-500 h-85 rounded-2xl flex-shrink"></div>
          <div className="col-span-3 bg-pink-500 h-85 rounded-2xl flex-shrink"></div>
        </div>

        {/* Right Side Large Boxes */}
        <div className="flex flex-col w-2/5">
          <div className="bg-teal-500 h-80 rounded-2xl mt-30 mb-4 ml-4 mr-4 flex-1"></div>
          <div className="bg-orange-500 h-80 rounded-2xl mb-30 mt-4 ml-4 mr-4 flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
