import React from 'react';

const DepositCard = ({ deposit, index, onEdit }) => {
  return (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => onEdit(index)}>
      <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
      <p>Balance: ${deposit.balance}</p>
      <p>Annual Percentage Rate: {deposit.annualYield}%</p>
      <p>Savings: ${typeof deposit.savings === 'number' ? deposit.savings.toFixed(2) : 'N/A'}</p>
    </div>
  );
};

export default DepositCard;
