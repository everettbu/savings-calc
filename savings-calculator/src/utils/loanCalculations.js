import loan_info from '../config/loanInfo';

export const calculateLoanSavings = (values) => {
  let { loanType, balance, interestRate, monthlyPayment, monthsLeft, vehicleModelAge } = values; 
  const annualInterestRate = interestRate / 100;
  const currentRemainingLoanValue = monthlyPayment * monthsLeft;
  console.log('CurrRemVal: ', currentRemainingLoanValue)
  let savingsIncrease = 0;

  //console.log('Starting calculation...');
  //console.log('loanType:', loanType);

  if (loanType === 'Auto') {
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
  } else if (loanType === 'Personal') {
    //console.log('Personal loan calculations...');
    for (const rate of loan_info.personal.rates) {
      //console.log('Rate:', rate);
      if (rate[0] <= monthsLeft && monthsLeft <= rate[1]) {
        const r = rate[2] / 12;
        const divisor = ((1 + r) ** monthsLeft - 1) / (r * (1 + r) ** monthsLeft);
        const newMonthlyPayment = balance / divisor;
        const newTotalValue = newMonthlyPayment * monthsLeft;
        console.log('FCCU Monthly:', newMonthlyPayment);
        console.log('FCCU Total:', newTotalValue);
        savingsIncrease = currentRemainingLoanValue - newTotalValue;
        break;
      }
    }
  }

  console.log('Savings increase:', savingsIncrease);
  return savingsIncrease > 0 ? savingsIncrease : 0;
};

export const checkAccuracy = (vals) => {
  let { loanType, balance, interestRate, monthlyPayment, monthsLeft, vehicleModelAge } = vals;
  const annualInterestRate = interestRate / 100;
  const currentRemainingLoanValue = monthlyPayment * monthsLeft;
  const monthlyRate = annualInterestRate/12;
  const aprRemVal = monthsLeft*(balance / (((1 + monthlyRate) ** monthsLeft - 1) / (monthlyRate * (1 + monthlyRate) ** monthsLeft)));
  const aprRemValRounded = Math.round((aprRemVal + Number.EPSILON) * 100) / 100;
  console.log('APRRemVal: ', aprRemValRounded);
  const match = aprRemValRounded >= currentRemainingLoanValue - 1 && aprRemValRounded <= currentRemainingLoanValue+1 ? null : "*Monthly Payment and Interest Rate do not match";
  const tooMuch = loanType === 'Personal' && balance > 30000 ? "*Personal loans cannot exceed $30k at First City" : null;
  return [match, tooMuch];
}