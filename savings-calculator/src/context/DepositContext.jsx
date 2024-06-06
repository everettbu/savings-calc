import React, { createContext, useState, useEffect } from 'react';

export const DepositContext = createContext();

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
    const newDeposits = [...deposits];
    newDeposits[index] = updatedDeposit;
    setDeposits(newDeposits);
  };

  const deleteDeposit = (index) => {
    const newDeposits = deposits.filter((_, i) => i !== index);
    setDeposits(newDeposits);
  };

  return (
    <DepositContext.Provider value={{ deposits, addDeposit, updateDeposit, deleteDeposit }}>
      {children}
    </DepositContext.Provider>
  );
};
