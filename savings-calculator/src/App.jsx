import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import DepositCalculator from './pages/AddDeposit';
import LoanCalculator from './pages/AddLoan';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposits" element={<DepositCalculator />} />
        <Route path="/loans" element={<LoanCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
