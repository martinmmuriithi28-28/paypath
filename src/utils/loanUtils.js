//Adds KSH to a number and formats it to 2 decimal places
export function formatMoney(amount) {
  return "KSh " + amount.toFixed(2);
}

// Adds up the amount still due on every loan.
export function calculateTotalOutstanding(loans) {
  let total = 0;
  for (const loan of loans) {
    total += loan.dueAmount;
  }
  return total;
}

// Adds up the original amount of every loan.
export function calculateTotalBorrowed(loans) {
  let total = 0;
  for (const loan of loans) {
    total += loan.amount;
  }
  return total;
}