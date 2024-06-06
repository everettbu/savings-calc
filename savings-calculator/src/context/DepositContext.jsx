import React, { createContext, useState } from 'react';

export const DepositContext = createContext();

export const DepositProvider = ({ children }) => {
  const [deposits, setDeposits] = useState([]);

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
