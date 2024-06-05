import React, { useState } from 'react';
import LoanForm from '../components/LoanForm';
import { calculateLoanSavings } from '../utils/loanCalculations';

const LoanCalculator = () => {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (values) => {
    console.log('Form values:', values);
    const savings = calculateLoanSavings(values);
    console.log('Calculated savings:', savings);
    setResults(savings);
  };

  return (
    <div>
      <h2>Add Loan Account</h2>
      <LoanForm onSubmit={handleFormSubmit} />
      {results !== null && <div>Your loan savings: ${results.toFixed(2)}</div>}
    </div>
  );
};

export default LoanCalculator;
