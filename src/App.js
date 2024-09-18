import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Users from './components/pages/Users';
import Orders from './components/pages/Orders';
import Vehicles from './components/pages/Vehicles';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="vehicles" element={<Vehicles />} />
      </Route>
    </Routes>
  );
}

export default App;
