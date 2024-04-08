import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { useSidebar } from '../../../context/SidebarContext';

const Layout = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className={`flex flex-col flex-1 ${isSidebarOpen ? '' : 'w-full'}`}>
        <Header />
        <div className="flex-1 overflow-y-auto p-3 bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
