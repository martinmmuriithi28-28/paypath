import { formatMoney } from "../utils/loanUtils";

function LoanCard({ loan }) {
  return (
    <div className="loan-card">
    
      <h3 className="h5">{loan.lender}</h3>
      <p className="mb-1">Original amount: {formatMoney(loan.amount)}</p>
      <p className="mb-1">Amount still due: {formatMoney(loan.dueAmount)}</p>
      <p className="mb-0">Due date: {loan.dueDate}</p>
    </div>
  );
}

export default LoanCard;