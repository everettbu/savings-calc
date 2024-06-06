import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DepositContext } from '../context/DepositContext';
import { LoanContext } from '../context/LoanContext';

const Home = () => {
  const navigate = useNavigate();
  const { deposits } = useContext(DepositContext);
  const { loans } = useContext(LoanContext);

  const goToDepositCalculator = () => {
    navigate('/add-deposit');
  };

  const goToLoanCalculator = () => {
    navigate('/add-loan');
  };

  const editDeposit = (index) => {
    navigate(`/edit-deposit/${index}`);
  };

  const editLoan = (index) => {
    navigate(`/edit-loan/${index}`);
  };

  const totalSavings = loans.reduce((total, loan) => {
    const loanSavings = loan.savings;
    return total + (typeof loanSavings === 'number' ? loanSavings : 0);
  }, 0) + deposits.reduce((total, deposit) => {
    const depositSavings = deposit.savings;
    return total + (typeof depositSavings === 'number' ? depositSavings : 0);
  }, 0);

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
          <div className="mt-6 w-full max-w-md">
            {deposits.map((deposit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => editDeposit(index)}>
                <h3 className="text-xl font-semibold">Deposit {index + 1}</h3>
                <p>Bank: {deposit.bank}</p>
                <p>Balance: ${deposit.balance}</p>
                <p>Annual Yield: {deposit.annualYield}%</p>
                <p>Savings: ${typeof deposit.savings === 'number' ? deposit.savings.toFixed(2) : 'N/A'}</p>
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
          <div className="mt-6 w-full max-w-md">
            {loans.map((loan, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => editLoan(index)}>
                <h3 className="text-xl font-semibold">Loan {index + 1}</h3>
                <p>Type: {loan.loanType}</p>
                <p>Fico Score: {loan.ficoScore}</p>
                <p>Balance: ${loan.balance}</p>
                <p>Interest Rate: {loan.interestRate}%</p>
                <p>Monthly Payment: ${loan.monthlyPayment}</p>
                <p>Months Left: {loan.monthsLeft}</p>
                <p>Savings: ${typeof loan.savings === 'number' ? loan.savings.toFixed(2) : 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="flex flex-col items-center mt-4">
        <h3 className="text-2xl font-semibold">
          Total Savings: ${totalSavings.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Home;
