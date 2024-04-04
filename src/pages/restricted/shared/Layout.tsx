import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../../components/shared/Header';
import Sidebar from '../../../components/shared/Sidebar';
import { useSidebar } from '../../../context/SidebarContext';

const Layout = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className={`flex flex-col flex-1 ${isSidebarOpen ? '' : 'w-full'}`}>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
