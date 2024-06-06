import React, { createContext, useState, useEffect } from 'react';

export const LoanContext = createContext();

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
    const newLoans = [...loans];
    newLoans[index] = updatedLoan;
    setLoans(newLoans);
  };

  const deleteLoan = (index) => {
    const newLoans = loans.filter((_, i) => i !== index);
    setLoans(newLoans);
  };

  return (
    <LoanContext.Provider value={{ loans, addLoan, updateLoan, deleteLoan }}>
      {children}
    </LoanContext.Provider>
  );
};
