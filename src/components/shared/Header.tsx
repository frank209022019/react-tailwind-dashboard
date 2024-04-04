import React from 'react';

import { useSidebar } from '../../context/SidebarContext';

const Header = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`bg-gray-800 p-3 text-white ${isSidebarOpen ? '' : 'w-full'}`}>
      Header Items
    </div>
  );
};

export default Header;
