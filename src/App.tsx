import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/public/Login';
import Dashboard from './pages/restricted/Dashboard';
import Products from './pages/restricted/Products';
import Layout from './pages/restricted/shared/Layout';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Restricted */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" index element={<Products />} />
        </Route>
        {/* Public */}
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
