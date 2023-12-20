import React from 'react';
//import Navbar from './components/Navbar';
//import Sidebar from './components/Sidebar';

const DashboardLayout = ({ }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
