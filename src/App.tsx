import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/public/Login';
import Customers from './pages/restricted/Customers';
import Dashboard from './pages/restricted/Dashboard';
import Orders from './pages/restricted/Orders';
import Products from './pages/restricted/Products';
import Settings from './pages/restricted/Settings';
import Layout from './pages/restricted/shared/Layout';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Restricted */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" index element={<Products />} />
          <Route path="orders" index element={<Orders />} />
          <Route path="customers" index element={<Customers />} />
          <Route path="settings" index element={<Settings />} />
        </Route>
        {/* Public */}
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
