import React from 'react';

const DepositCard = ({ deposit, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-400 mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
      <p>Balance: {deposit.balance.toLocaleString(undefined, {currency:'USD', style:'currency', currencyDisplay:'narrowSymbol'})}</p>
      <p>APR: {deposit.annualYield}%</p>
      <div className="relative">
        <div className="mt-2 bg-secondary text-white font-bold p-2 rounded opacity-75 group-hover:opacity-100 transition-opacity duration-300 border-2 border-secondary md:absolute md:right-0 md:top-0 md:transform md:-translate-y-11 md:mt-0 md:inline-block"
             style={{ display: 'inline-block' }}>
            Savings: {typeof deposit.savings === 'number' ? deposit.savings.toLocaleString(undefined, {currency:'USD', style:'currency', currencyDisplay:'narrowSymbol'}) : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
