/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react';

import { useSidebar } from '../context/SidebarContext';
import HeaderAvatarMenu from './Header.AvatarMenu';
import HeaderPopover from './Header.Popover';

const Header = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`bg-white p-2 ${isSidebarOpen ? '' : 'w-full'} flex justify-between items-center`}>
      <div className="relative">
        <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-1">
          travel_explore
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="text-sm px-1 rounded-sm focus:outline-none active:outline-none h-7 w-64 pl-8 border"
        />
      </div>
      <div className="flex items-center gap-1 mr-1">
        <HeaderPopover icon="chat" title="Messages" message="This panel is for messages" />
        <HeaderPopover
          icon="notifications"
          title="Notifications"
          message="This panel is for notifications"
        />
        <HeaderAvatarMenu />
      </div>
    </div>
  );
};

export default Header;
