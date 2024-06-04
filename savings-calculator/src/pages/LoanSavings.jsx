import React, { useState } from 'react';
import LoanForm from '../components/LoanForm';
import loan_info from '../config/loanInfo';

const LoanCalculator = () => {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (values) => {
    const savings = calculateLoanSavings(values);
    setResults(savings);
  };

  const calculateLoanSavings = (values) => {
    let { loanType, balance, interestRate, monthlyPayment, monthsLeft, carModelAge } = values;
    const annualInterestRate = interestRate / 100;
    const currentRemainingLoanValue = monthlyPayment * monthsLeft;

    let savingsIncrease = 0;

    if (loanType === 'Auto') {
      for (const apr of loan_info.auto[carModelAge]) {
        if (apr[0] <= monthsLeft && monthsLeft <= apr[1]) {
          const r = apr[2] / 12;
          const divisor = ((1 + r) ** monthsLeft - 1) / (r * (1 + r) ** monthsLeft);
          const newMonthlyPayment = balance / divisor;
          const newTotalValue = newMonthlyPayment * monthsLeft;
          savingsIncrease = currentRemainingLoanValue - newTotalValue;
          break;
        }
      }
    } else if (loanType === 'Personal') {
      let exisBal = 0;
      if (balance + exisBal > loan_info.personal.size[1]) {
        balance = loan_info.personal.size[1] - exisBal;
      }
      for (const rate of loan_info.personal.rates) {
        if (rate[0] <= monthsLeft && monthsLeft <= rate[1]) {
          exisBal += balance;
          const r = rate[2] / 12;
          const divisor = ((1 + r) ** monthsLeft - 1) / (r * (1 + r) ** monthsLeft);
          const newMonthlyPayment = balance / divisor;
          const newTotalValue = newMonthlyPayment * monthsLeft;
          savingsIncrease = currentRemainingLoanValue - newTotalValue;
          break;
        }
      }
    }

    return savingsIncrease > 0 ? savingsIncrease : 0;
  };

  return (
    <div>
      <h2>Loan Savings Calculator</h2>
      <LoanForm onSubmit={handleFormSubmit} />
      {results !== null && <div>Your loan savings: ${results.toFixed(2)}</div>}
    </div>
  );
};

export default LoanCalculator;