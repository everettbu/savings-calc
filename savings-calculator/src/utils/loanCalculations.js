import loan_info from '../config/loanInfo';

export const calculateLoanSavings = (values) => {
  let { loanType, balance, interestRate, monthlyPayment, monthsLeft, vehicleModelAge } = values; 
  const annualInterestRate = interestRate / 100;
  const currentRemainingLoanValue = monthlyPayment * monthsLeft;

  let savingsIncrease = 0;

  console.log('Starting calculation...');
  console.log('loanType:', loanType);

  if (loanType === 'auto') {
    console.log('Auto loan calculations...');
    console.log('vehicleModelAge:', vehicleModelAge);
    if (loan_info.auto[vehicleModelAge]) {
      for (const apr of loan_info.auto[vehicleModelAge]) {
        console.log('APR:', apr);
        if (apr[0] <= monthsLeft && monthsLeft <= apr[1]) {
          const r = apr[2] / 12;
          const divisor = ((1 + r) ** monthsLeft - 1) / (r * (1 + r) ** monthsLeft);
          const newMonthlyPayment = balance / divisor;
          const newTotalValue = newMonthlyPayment * monthsLeft;
          savingsIncrease = currentRemainingLoanValue - newTotalValue;
          break;
        }
      }
    } else {
      console.error('Invalid vehicle model age:', vehicleModelAge);
    }
  } else if (loanType === 'personal') {
    console.log('Personal loan calculations...');
    let exisBal = 0;
    if (balance + exisBal > loan_info.personal.size[1]) {
      balance = loan_info.personal.size[1] - exisBal;
    }
    for (const rate of loan_info.personal.rates) {
      console.log('Rate:', rate);
      if (rate[0] <= monthsLeft && monthsLeft <= rate[1]) {
        exisBal += balance;
        const r = rate[2] / 12;
        const divisor = ((1 + r) ** monthsLeft - 1) / (r * (1 + r) ** monthsLeft);
        const newMonthlyPayment = balance / divisor;
        const newTotalValue = newMonthlyPayment * monthsLeft;
        savingsIncrease = currentRemainingLoanValue - newTotalValue;
        break;
      }
    }
  }

  console.log('Savings increase:', savingsIncrease);
  return savingsIncrease > 0 ? savingsIncrease : 0;
};
