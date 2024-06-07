import React from 'react';

const LoanCard = ({ loan, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-400 mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{loan.bank} {loan.loanType} Loan</h3>
      <p>Balance: ${loan.balance}</p>
      <p>Interest Rate: {loan.interestRate}%</p>
      <div className="relative">
        <div className="absolute right-0 top-0 transform -translate-y-11 bg-secondary text-white font-bold p-2 rounded opacity-75 group-hover:opacity-100 transition-opacity duration-300 border-2 border-secondary" style={{ maxWidth: '200px' }}>
          Savings: ${typeof loan.savings === 'number' ? loan.savings.toFixed(2) : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
