import React, { createContext, useState, useEffect } from 'react';

// Create context
export const LoanContext = createContext();

// Create provider component
export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState(() => {
    // Load stored loans from local storage
    const savedLoans = localStorage.getItem('loans');
    return savedLoans ? JSON.parse(savedLoans) : [];
  });

  // Save loans to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('loans', JSON.stringify(loans));
  }, [loans]);

  const addLoan = (loan) => {
    setLoans([...loans, loan]);
  };

  const clearLoans = () => {
    setLoans([]);
  };

  return (
    <LoanContext.Provider value={{ loans, addLoan, clearLoans }}>
      {children}
    </LoanContext.Provider>
  );
};
