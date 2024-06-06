import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDeposit from './pages/AddDeposit';
import EditDeposit from './pages/EditDeposit';
import AddLoan from './pages/AddLoan';
import EditLoan from './pages/EditLoan';
import { DepositProvider } from './context/DepositContext';
import { LoanProvider } from './context/LoanContext';

function App() {
  return (
    <DepositProvider>
      <LoanProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-deposit" element={<AddDeposit />} />
            <Route path="/edit-deposit/:id" element={<EditDeposit />} />
            <Route path="/add-loan" element={<AddLoan />} />
            <Route path="/edit-loan/:id" element={<EditLoan />} />
          </Routes>
        </Router>
      </LoanProvider>
    </DepositProvider>
  );
}

export default App;
