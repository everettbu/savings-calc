import React from 'react';

const LoanCard = ({ loan, index, onEdit }) => {
  return (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => onEdit(index)}>
      <h3 className="text-xl font-semibold">{loan.bank} {loan.loanType} Loan</h3>
      <p>Balance: ${loan.balance}</p>
      <p>Interest Rate: {loan.interestRate}%</p>
      <p>Monthly Payment: ${loan.monthlyPayment}</p>
      <p>Savings: ${typeof loan.savings === 'number' ? loan.savings.toFixed(2) : 'N/A'}</p>
    </div>
  );
};

export default LoanCard;
