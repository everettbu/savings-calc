import React, { createContext, useState, useEffect } from 'react';

// Create context
export const DepositContext = createContext();

// Create provider component
export const DepositProvider = ({ children }) => {
  const [deposits, setDeposits] = useState(() => {
    const savedDeposits = localStorage.getItem('deposits');
    return savedDeposits ? JSON.parse(savedDeposits) : [];
  });

  useEffect(() => {
    localStorage.setItem('deposits', JSON.stringify(deposits));
  }, [deposits]);

  const addDeposit = (deposit) => {
    setDeposits([...deposits, deposit]);
  };

  const updateDeposit = (index, updatedDeposit) => {
    const newDeposits = deposits.map((d, i) => (i === index ? updatedDeposit : d));
    setDeposits(newDeposits);
  };

  const deleteDeposit = (index) => {
    const newDeposits = deposits.filter((d, i) => i !== index);
    setDeposits(newDeposits);
  };

  return (
    <DepositContext.Provider value={{ deposits, addDeposit, updateDeposit, deleteDeposit }}>
      {children}
    </DepositContext.Provider>
  );
};
