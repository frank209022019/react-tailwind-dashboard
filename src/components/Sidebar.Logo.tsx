import React from 'react';

import { motion } from 'framer-motion';

import { useSidebar } from '../context/SidebarContext';

const SidebarLogo = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <motion.span
        onClick={toggleSidebar}
        key="tailwind-header-logo"
        className="font-xl focus:outline-none active:outline-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}>
        {isSidebarOpen ? (
          <span className="material-symbols-outlined text-white">menu_open</span>
        ) : (
          <span className="material-symbols-outlined text-white">menu</span>
        )}
      </motion.span>
    </>
  );
};

export default SidebarLogo;
