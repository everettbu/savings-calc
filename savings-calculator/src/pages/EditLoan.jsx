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
    navigate('/');
  };

  const handleDelete = () => {
    deleteLoan(parseInt(id, 10));
    navigate('/');
  };

  if (!loan) {
    return <div>Loan not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">Edit Loan Account</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <LoanForm
          initialValues={loan}
          onSubmit={handleFormSubmit}
          formClass="space-y-6"
          inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          labelClass="block text-sm font-medium text-gray-700"
          errorClass="text-red-500 text-sm mt-1"
          buttonClass="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
        />
        {results !== null && (
          <div className="mt-4 text-lg text-green-500">
            Your savings: ${results.savings.toFixed(2)}
          </div>
        )}
        <button
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 mt-4"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default EditLoan;
