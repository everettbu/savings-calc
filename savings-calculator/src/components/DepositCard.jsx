import React from 'react';

const DepositCard = ({ deposit, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 shadow rounded-lg border-l-4 border-slate-400 mb-4 cursor-pointer hover:shadow-md transition-shadow duration-300 group"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
      <p>Balance: {deposit.balance.toLocaleString(undefined, {currency:'USD', style:'currency', currencyDisplay:'narrowSymbol'})}</p>
      <p>APR: {deposit.annualYield}%</p>
      <div className="relative">
        <div className="mt-2 bg-secondary-light text-white border border-secondary font-bold p-2 rounded group-hover:bg-secondary transition-opacity duration-300 md:absolute md:right-0 md:top-0 md:transform md:-translate-y-11 md:mt-0 md:inline-block"
             style={{ display: 'inline-block' }}>
            Savings: {typeof deposit.savings === 'number' ? deposit.savings.toLocaleString(undefined, {currency:'USD', style:'currency', currencyDisplay:'narrowSymbol'}) : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
