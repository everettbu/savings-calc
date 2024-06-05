import React, { useState } from 'react';
import DepositForm from '../components/DepositForm';
import { calculateDepositSavings } from '../utils/depositCalculations';

const DepositCalculator = () => {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (values) => {
    const savings = calculateDepositSavings(values.balance, values.annualYield);
    setResults(savings);
  };

  return (
    <div>
      <h2>Add Deposit Account</h2>
      <DepositForm onSubmit={handleFormSubmit} />
      {results !== null && <div>Your savings: ${results.toFixed(2)}</div>}
    </div>
  );
};

export default DepositCalculator;
