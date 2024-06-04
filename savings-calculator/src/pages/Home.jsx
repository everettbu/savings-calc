import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToDepositCalculator = () => {
    navigate('/deposits');
  };

  const goToLoanCalculator = () => {
    navigate('/loans');
  };

  return (
    <div>
      <h1>Derisq Savings Calculator</h1>
      <button onClick={goToDepositCalculator}>Deposits</button>
      <button onClick={goToLoanCalculator}>Loans</button>
    </div>
  );
};

export default Home;
