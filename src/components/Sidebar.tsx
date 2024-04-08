import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { useSidebar } from '../context/SidebarContext';
import SidebarRoutesArray from '../pages/restricted/shared/SidebarRoutesArray';
import SidebarLogo from './Sidebar.Logo';
import SidebarTitle from './Sidebar.Title';

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <motion.div
        className="bg-gray-700 flex flex-col justify-between h-screen shrink-0"
        initial={{ width: 0 }}
        animate={{ width: isSidebarOpen ? 170 : 50 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}>
        <div className="flex ps-3 py-3 pe-3 mt-1">
          {/* Logo */}
          <SidebarLogo />
          {/* Title */}
          <SidebarTitle />
        </div>
        {/* Top Routes */}
        <div className="p-3 text-white">
          {isSidebarOpen ? (
            <div className="flex flex-col items-start space-y-2">
              {SidebarRoutesArray.TopRoutes.map((route) => (
                <>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}>
                    <Link key={route.key} to={route.path} className="flex">
                      <div
                        className={`size-6 bg-white rounded text-black font-semibold text-center`}>
                        {route.acronym}
                      </div>
                      <span className="text-sm text-white ms-2">{route.name}</span>
                    </Link>
                  </motion.div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-start space-y-2">
              {SidebarRoutesArray.TopRoutes.map((route) => (
                <>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}>
                    <Link key={route.key} to={route.path} className="flex">
                      <div
                        className={`size-6 bg-white rounded text-black font-semibold text-center`}>
                        {route.acronym}
                      </div>
                    </Link>
                  </motion.div>
                </>
              ))}
            </div>
          )}
        </div>
        {/* Bottom Routes */}
        <div className="mt-auto p-3 text-white">
          <hr className={`mb-3 ${isSidebarOpen ? 'w-full' : 'w-0'}`} />
          {isSidebarOpen ? (
            <div className="flex flex-col items-start space-y-2">
              {SidebarRoutesArray.BottomRoutes.map((route) => (
                <>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}>
                    <Link key={route.key} to={route.path} className="flex">
                      <div
                        className={`size-6 bg-white rounded text-black font-semibold text-center`}>
                        {route.acronym}
                      </div>
                      <span className="text-sm text-white ms-2">{route.name}</span>
                    </Link>
                  </motion.div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-start space-y-2">
              {SidebarRoutesArray.BottomRoutes.map((route) => (
                <>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}>
                    <Link key={route.key} to={route.path} className="flex">
                      <div
                        className={`size-6 bg-white rounded text-black font-semibold text-center`}>
                        {route.acronym}
                      </div>
                    </Link>
                  </motion.div>
                </>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
