import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Deposit
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <button
            onClick={goToLoanCalculator}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Add Loan
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
