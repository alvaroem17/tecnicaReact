import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => (
  <div className="min-h-screen max-w-screen flex flex-col">
    <header className="p-4 bg-gray-800 text-white text-center">
      <h1 className="text-2xl font-bold">My App</h1>
    </header>
    <div className="flex-1">
      <Outlet />
    </div>
    <footer className="p-4 bg-gray-700 text-center text-white">
      © {new Date().getFullYear()} My App
    </footer>
  </div>
);

export default MainLayout;
