import React, { createContext, useState, useEffect } from 'react';

// Create context
export const DepositContext = createContext();

// Create provider component
export const DepositProvider = ({ children }) => {
  const [deposits, setDeposits] = useState(() => {
    // Load stored deposits from local storage
    const savedDeposits = localStorage.getItem('deposits');
    return savedDeposits ? JSON.parse(savedDeposits) : [];
  });

  // Save deposits to local storage whenever they change
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

  const clearDeposits = () => {
    setDeposits([]);
  };

  return (
    <DepositContext.Provider value={{ deposits, addDeposit, updateDeposit, clearDeposits }}>
      {children}
    </DepositContext.Provider>
  );
};
