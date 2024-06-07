import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoanForm from '../components/LoanForm';
import { LoanContext } from '../context/LoanContext';
import { calculateLoanSavings } from '../utils/loanCalculations';

const EditLoan = () => {
  const { loans, updateLoan, deleteLoan } = useContext(LoanContext);
  const { id } = useParams();
  const loan = loans[parseInt(id, 10)];
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    const savings = calculateLoanSavings(values);
    const updatedLoan = { ...values, savings };

    updateLoan(parseInt(id, 10), updatedLoan);
    setResults(updatedLoan);
  };

  const handleDelete = () => {
    deleteLoan(parseInt(id, 10));
    navigate('/');
  };

  if (!loan) {
    return <div>Loan not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4 relative">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-8 bg-primary bg-opacity-80 text-white py-2 px-4 rounded-full shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 flex items-center"
      >
        ← Home
      </button>
      <div className="w-full max-w-md flex justify-center mb-6 mt-4">
        <h2 className="text-3xl font-semibold">Edit Loan Account</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <LoanForm
          initialValues={loan}
          onSubmit={handleFormSubmit}
          formClass="space-y-6"
          inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          labelClass="block text-sm font-medium text-gray-700"
          errorClass="text-red-500 text-sm mt-1"
        />
        <button
          type="submit"
          form="loan-form"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 mt-6"
        >
          Update Savings
        </button>
        {results !== null && (
          <div className="mt-4 text-lg text-green-500">
            Your savings: ${results.savings.toFixed(2)}
          </div>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 mt-4"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6M10 7h4m-6 0h6m-7-4h8m-8 0h8m-2 4h-4"
          ></path>
        </svg>
        Delete Account
      </button>
    </div>
  );
};

export default EditLoan;
