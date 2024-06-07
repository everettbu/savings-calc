import React from 'react';

const LoanCard = ({ loan, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{loan.bank} {loan.loanType} Loan</h3>
      <p>Balance: ${loan.balance}</p>
      <p>Interest Rate: {loan.interestRate}%</p>
      <p>Savings: ${typeof loan.savings === 'number' ? loan.savings.toFixed(2) : 'N/A'}</p>
    </div>
  );
};

export default LoanCard;
