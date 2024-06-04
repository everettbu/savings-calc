import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DepositCalculator from './pages/DepositSavings';
import LoanCalculator from './pages/LoanSavings';


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
