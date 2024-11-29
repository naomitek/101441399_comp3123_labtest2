import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/AddEmployee';

const App = () => {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
};

export default App;

