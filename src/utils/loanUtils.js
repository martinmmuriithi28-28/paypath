//Adds KSH to a number and formats it to 2 decimal places

export function formatMoney(amount) {
  return "KSh " + amount.toFixed(2);
}