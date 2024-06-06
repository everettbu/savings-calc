import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoanForm from '../components/LoanForm';
import { LoanContext } from '../context/LoanContext';
import { calculateLoanSavings } from '../utils/loanCalculations';

const AddLoan = () => {
  const { addLoan } = useContext(LoanContext);
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    const savings = calculateLoanSavings(values);
    const newLoan = { ...values, savings };
    addLoan(newLoan);
    setResults(newLoan);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">Add Loan Account</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <LoanForm
          initialValues={{
            bank: '',
            loanType: '',
            ficoScore: '',
            balance: '',
            interestRate: '',
            monthlyPayment: '',
            monthsLeft: '',
            vehicleModelAge: '',
          }}
          onSubmit={handleFormSubmit}
          formClass="space-y-6"
          inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          labelClass="block text-sm font-medium text-gray-700"
          errorClass="text-red-500 text-sm mt-1"
        />
        <button
          type="submit"
          form="loan-form"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 mt-4"
        >
          Calculate Savings
        </button>
        {results !== null && (
          <div className="mt-4 text-lg text-green-500">
            Your savings: ${results.savings.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddLoan;
