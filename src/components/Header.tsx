/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from 'react';
import { HiOutlineChatAlt, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi';

import { useSidebar } from '../context/SidebarContext';
import HeaderPopover from './Header.Popover';

const Header = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`bg-white p-3 ${isSidebarOpen ? '' : 'w-full'} flex justify-between items-center`}>
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-1"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm px-1 rounded-sm focus:outline-none active:outline-none h-8 w-64 pl-7 border"
        />
      </div>
      <div className="flex items-center gap-1 mr-1">
        <HeaderPopover
          icon={<HiOutlineChatAlt />}
          title="Messages"
          message="This is for messages"
        />
        <HeaderPopover
          icon={<HiOutlineMail />}
          title="Notifications"
          message="This is for notifications"
        />
      </div>
    </div>
  );
};

export default Header;
