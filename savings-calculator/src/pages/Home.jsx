import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DepositContext } from '../context/DepositContext';
import { LoanContext } from '../context/LoanContext';

const Home = () => {
  const navigate = useNavigate();
  const { deposits, clearDeposits } = useContext(DepositContext);
  const { loans, clearLoans } = useContext(LoanContext);

  const goToDepositCalculator = () => {
    navigate('/deposits');
  };

  const goToLoanCalculator = () => {
    navigate('/loans');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white text-center py-4 w-full">
        <h1 className="text-4xl font-bold">Derisq Savings Calculator</h1>
      </header>
      <div className="flex w-full mt-3 text-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Deposits</h2>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Loans</h2>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 w-full mt-2"></div> {/* Horizontal line */}
      <main className="flex flex-1">
        <div className="flex-1 flex flex-col items-center justify-center border-r-2 border-gray-300">
          <button
            onClick={goToDepositCalculator}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
          >
            Add Deposit
          </button>
          <button
            onClick={clearDeposits}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 mb-4"
          >
            Clear Deposits
          </button>
          <div className="mt-6 w-full max-w-md">
            {deposits.map((deposit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4" onClick={() => editDeposit(index)}>
                <h3 className="text-xl font-semibold">Deposit {index + 1}</h3>
                <p>Balance: ${deposit.balance}</p>
                <p>Annual Yield: {deposit.annualYield}%</p>
                <p>Savings: ${deposit.savings !== undefined ? deposit.savings.toFixed(2) : 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <button
            onClick={goToLoanCalculator}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 mb-4"
          >
            Add Loan
          </button>
          <button
            onClick={clearLoans}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 mb-4"
          >
            Clear Loans
          </button>
          <div className="mt-6 w-full max-w-md">
            {loans.map((loan, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-semibold">Loan {index + 1}</h3>
                <p>Type: {loan.loanType}</p>
                <p>Balance: ${loan.balance}</p>
                <p>Interest Rate: {loan.interestRate}%</p>
                <p>Savings: ${loan.savings !== undefined ? loan.savings.toFixed(2) : 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
