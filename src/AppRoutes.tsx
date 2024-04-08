// routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HelpAndSupport from './pages/public/HelpAndSupport';
import Login from './pages/public/Login';
import NotFound from './pages/public/NotFound';
import Customers from './pages/restricted/Customers';
import Dashboard from './pages/restricted/Dashboard';
import Orders from './pages/restricted/Orders';
import Products from './pages/restricted/Products';
import Profile from './pages/restricted/Profile';
import Settings from './pages/restricted/Settings';
// Import your components
import Layout from './pages/restricted/shared/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Restricted Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="help-support" element={<HelpAndSupport />} />
      </Route>

      {/* Public Routes */}
      <Route path="login" element={<Login />} />

      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
