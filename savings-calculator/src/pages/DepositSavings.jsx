import React, { useState } from 'react';
import DepositForm from '../components/DepositForm';

const DepositCalculator = () => {
  const [results, setResults] = useState(null);

  const creditUnionRate = 0.052; // Made up value for now 5.2%

  const handleFormSubmit = (values) => {
    const savings = calculateDepositSavings(values.balance, values.annualYield);
    setResults(savings);
  };

  const calculateDepositSavings = (balance, annualYield) => {
    const currentSavings = balance * (1 + annualYield / 100);
    const savingsWithCreditUnion = balance * (1 + creditUnionRate);
    const savingsIncrease = savingsWithCreditUnion - currentSavings;
    return savingsIncrease;
  };

  return (
    <div>
      <h2>Deposit Savings Calculator</h2>
      <DepositForm onSubmit={handleFormSubmit} />
      {results !== null && <div>Your savings: ${results.toFixed(2)}</div>}
    </div>
  );
};

export default DepositCalculator;
