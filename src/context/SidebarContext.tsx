import React, { createContext, ReactNode, useContext, useState } from 'react';

interface SidebarContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

// Create a context provider component
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const value: SidebarContextType = {
    isSidebarOpen,
    setIsSidebarOpen
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
