import React from 'react';

const DepositCard = ({ deposit, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
      <p>Balance: ${deposit.balance}</p>
      <p>APR: {deposit.annualYield}%</p>
      <p>Savings: ${typeof deposit.savings === 'number' ? deposit.savings.toFixed(2) : 'N/A'}</p>
    </div>
  );
};

export default DepositCard;
