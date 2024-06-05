import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDeposit from './pages/AddDeposit';
import AddLoan from './pages/AddLoan';
import EditDeposit from './pages/EditDeposit';
import EditLoan from './pages/EditLoan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposits" element={<AddDeposit />} />
        <Route path="/loans" element={<AddLoan />} />
        <Route path="/edit-deposit/:id" element={<EditDeposit />} /> 
        <Route path="/edit-loan/:id" element={<EditLoan />} /> 
      </Routes>
    </Router>
  );
}

export default App;
