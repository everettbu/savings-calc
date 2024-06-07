import React from 'react';

const DepositCard = ({ deposit, index, onEdit }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-400 mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
      onClick={() => onEdit(index)}
    >
      <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
      <p>Balance: ${deposit.balance}</p>
      <p>APR: {deposit.annualYield}%</p>
      <div className="relative">
        <div className="absolute right-0 top-0 transform -translate-y-11 bg-secondary text-white font-bold p-2 rounded opacity-75 group-hover:opacity-100 transition-opacity duration-300 border-2 border-secondary" style={{ maxWidth: '200px' }}>
          Savings: ${typeof deposit.savings === 'number' ? deposit.savings.toFixed(2) : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;



// Other variation, more simple

// import React from 'react';

// const DepositCard = ({ deposit, index, onEdit }) => {
//   return (
//     <div
//       className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 mb-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
//       onClick={() => onEdit(index)}
//     >
//       <h3 className="text-xl font-semibold">{deposit.bank} Deposit Account</h3>
//       <p>Balance: ${deposit.balance}</p>
//       <p>APR: {deposit.annualYield}%</p>
//       <div className="bg-green-100 text-green-800 font-bold p-2 rounded mt-2 -ml-2" style={{ maxWidth: '150px' }}>
//         Savings: ${typeof deposit.savings === 'number' ? deposit.savings.toFixed(2) : 'N/A'}
//       </div>
//     </div>
//   );
// };

// export default DepositCard;
