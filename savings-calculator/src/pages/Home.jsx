import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DepositContext } from '../context/DepositContext';
import { LoanContext } from '../context/LoanContext';
import DepositCard from '../components/DepositCard';
import LoanCard from '../components/LoanCard';
import Menu from '../components/Menu';
import logo from '../assets/logoicon.png';

const Home = () => {
  const navigate = useNavigate();
  const { deposits } = useContext(DepositContext);
  const { loans } = useContext(LoanContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <header className="bg-primary text-white text-center py-1 w-full relative">
        <button
          onClick={toggleDrawer}
          className="absolute bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center"
          style={{ top: '-1px', left: '10px', width: '40px', height: '40px', fontSize: '1.5rem' }}
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold text-center">{windowWidth < 430 ? 'Savings Calculator' : 'Financial Savings Calculator'}</h1>
        <a href='https://www.firstcitycu.org/' target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1 right-5 w-8 h-8 object-contain"
          />
        </a>
      </header>
      <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigate={navigate} />
      <div className={`flex w-full items-start ${isDrawerOpen ? 'pointer-events-none' : ''}`} style={{ marginTop: '-1px' }}>
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-400 w-full p-2 shadow-none text-center" style={{ marginBottom: '-1rem', paddingBottom: '1rem' }}>
            <h2 className="text-3xl font-semibold">Deposits</h2>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-400 w-full  p-2 shadow-none text-center" style={{ marginBottom: '-1rem', paddingBottom: '1rem' }}>
            <h2 className="text-3xl font-semibold">Loans</h2>
          </div>
        </div>
      </div>
      <main className="flex flex-1 p-4">
        <div className="flex-1 flex flex-col items-center mt-4">
          <div className="w-full overflow-y-auto" style={{ maxWidth: '650px', maxHeight: 'calc(100vh - 250px)' }}>
            {deposits.map((deposit, index) => (
              <DepositCard key={index} deposit={deposit} index={index} onEdit={editDeposit} />
            ))}
          </div>
          <button
            onClick={goToDepositCalculator}
            className="bg-tertiary text-white px-4 py-2 rounded-lg opacity-90 hover:bg-tertiary-dark hover:shadow-lg transition duration-300 mt-4 transform hover:scale-105"
          >
            + Add Deposit
          </button>
        </div>
        <div className="w-0.5 bg-slate-400 mx-4"></div> {/* Vertical line */}
        <div className="flex-1 flex flex-col items-center mt-4">
          <div className="w-full overflow-y-auto" style={{ maxWidth: '650px', maxHeight: 'calc(100vh - 250px)' }}>
            {loans.map((loan, index) => (
              <LoanCard key={index} loan={loan} index={index} onEdit={editLoan} />
            ))}
          </div>
          <button
            onClick={goToLoanCalculator}
            className="bg-tertiary text-white px-4 py-2 rounded-lg opacity-90 hover:bg-tertiary-dark hover:shadow-lg transition duration-300 mt-4 transform hover:scale-105"
          >
            + Add Loan
          </button>
        </div>
      </main>
      <div className="flex flex-col items-center mt-2">
        <div className="border-t-2 border-l-2 border-r-2 border-black rounded-t-lg bg-secondary text-white p-4 w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center">
            Total Savings: {(Math.round((totalSavings + Number.EPSILON) *100)/100).toLocaleString(undefined, {style:'currency', currency:'USD', currencyDisplay:'narrowSymbol'})}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
