import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';
import EmployeePage from './pages/EmployeePage';

export default () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerPage />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}