import React from 'react';

import { motion } from 'framer-motion';

import { useSidebar } from '../../context/SidebarContext';

const SidebarTitle = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      {isSidebarOpen && (
        <motion.span
          key="tailwind-text"
          className="text-white font-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}>
          Tailwind
        </motion.span>
      )}
    </>
  );
};

export default SidebarTitle;
