import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DepositForm from '../components/DepositForm';
import { DepositContext } from '../context/DepositContext';
import { calculateDepositSavings } from '../utils/depositCalculations';

const EditDeposit = () => {
  const { deposits, updateDeposit, deleteDeposit } = useContext(DepositContext);
  const { id } = useParams();
  const deposit = deposits[parseInt(id, 10)];
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    const savings = calculateDepositSavings(values.balance, values.annualYield);
    const updatedDeposit = { ...values, savings };

    updateDeposit(parseInt(id, 10), updatedDeposit);
    setResults(updatedDeposit);
    navigate('/');
  };

  const handleDelete = () => {
    deleteDeposit(parseInt(id, 10));
    navigate('/');
  };

  if (!deposit) {
    return <div>Deposit not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">Edit Deposit Account</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <DepositForm
          initialValues={deposit}
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

export default EditDeposit;
