const creditUnionRate = 0.052; // Made up value for now 5.2%

export const calculateDepositSavings = (balance, annualYield) => {
  const currentSavings = balance * (1 + annualYield / 100);
  const savingsWithCreditUnion = balance * (1 + creditUnionRate);
  const savingsIncrease = savingsWithCreditUnion - currentSavings;
  return savingsIncrease > 0 ? savingsIncrease : 0;
};
