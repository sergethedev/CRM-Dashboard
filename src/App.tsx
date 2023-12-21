import React from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './App.css';
function App() {
  return (
    <div className="flex h-screen w-screen bg-red-900">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
