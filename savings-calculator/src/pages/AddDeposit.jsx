import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DepositForm from '../components/DepositForm';
import { DepositContext } from '../context/DepositContext';
import { calculateDepositSavings } from '../utils/depositCalculations';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddDeposit = () => {
  const { deposits, addDeposit, updateDeposit } = useContext(DepositContext);
  const [results, setResults] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const handleFormSubmit = (values) => {
    const savings = calculateDepositSavings(values.balance, values.annualYield);
    const newDeposit = { ...values, savings };
    if (editingIndex !== null) {
      updateDeposit(editingIndex, newDeposit);
      toast.success('Account updated on Home');
    } else {
      addDeposit(newDeposit);
      setEditingIndex(deposits.length); // Set the editing index to the newly added deposit
      toast.success('Account added to Home');
    }
    setResults(newDeposit);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-8 bg-primary bg-opacity-80 text-white py-2 px-4 rounded-full shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105 flex items-center"
      >
        ← Home
      </button>
      <h2 className="text-3xl font-semibold mb-6 mt-4">Add Deposit Account</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <DepositForm
          initialValues={{
            bank: '',
            balance: '',
            annualYield: '',
          }}
          onSubmit={handleFormSubmit}
          formClass="space-y-6"
          inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          labelClass="block text-sm font-medium text-gray-700"
          errorClass="text-red-500 text-sm mt-1"
        />
        <button
          type="submit"
          form="deposit-form"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 mt-4"
        >
          Calculate Savings
        </button>
        {results !== null && (
          <div>
            <div className="mt-4 text-lg text-green-500">
              Your savings: ${results.savings.toFixed(2)}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddDeposit;
