import React, { useState, useContext } from 'react';
import DepositForm from '../components/DepositForm';
import { calculateDepositSavings } from '../utils/depositCalculations';
import { DepositContext } from '../context/DepositContext';

const DepositCalculator = () => {
  const [results, setResults] = useState(null);
  const { addDeposit } = useContext(DepositContext);

  const handleFormSubmit = (values) => {
    const savings = calculateDepositSavings(values.balance, values.annualYield);
    setResults(savings);
    addDeposit({ ...values, savings });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">Add Deposit Account</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <DepositForm 
          onSubmit={handleFormSubmit}
          formClass="space-y-6"
          inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          labelClass="block text-sm font-medium text-gray-700"
          errorClass="text-red-500 text-sm mt-1"
          buttonClass="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
        />
        {results !== null && (
          <div className="mt-4 text-lg text-green-500">
            Your savings: ${results.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositCalculator;
