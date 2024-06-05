import React, { createContext, useState, useEffect } from 'react';

// Create context
export const LoanContext = createContext();

// Create provider component
export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState(() => {
    const savedLoans = localStorage.getItem('loans');
    return savedLoans ? JSON.parse(savedLoans) : [];
  });

  useEffect(() => {
    localStorage.setItem('loans', JSON.stringify(loans));
  }, [loans]);

  const addLoan = (loan) => {
    setLoans([...loans, loan]);
  };

  const updateLoan = (index, updatedLoan) => {
    const newLoans = loans.map((l, i) => (i === index ? updatedLoan : l));
    setLoans(newLoans);
  };

  const clearLoans = () => {
    setLoans([]);
  };

  return (
    <LoanContext.Provider value={{ loans, addLoan, updateLoan, clearLoans }}>
      {children}
    </LoanContext.Provider>
  );
};
