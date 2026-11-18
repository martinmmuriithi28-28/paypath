//Adds KSH to a number and formats it to 2 decimal places
export function formatMoney(amount) {
  return (
    "KSh " +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
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

export function calculatePercentage(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return (part / whole) * 100;
}

export function getToday() {
  return new Date().toISOString().slice(0, 10);
}


export function calculateDueThisMonth(loans) {
  
  const thisMonth = getToday().slice(0, 7);
  let total = 0;
  for (const loan of loans) {
    if (loan.dueDate.slice(0, 7) === thisMonth) {
      total += loan.dueAmount;
    }
  }
  return total;
}