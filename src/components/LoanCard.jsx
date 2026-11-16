import { formatMoney } from "../utils/loanUtils";

function LoanCard({ loan }) {
  
  function handleViewClick() {
    console.log("View details clicked for:", loan.lender);
  }

  return (
    <div className="loan-card">
      
      <h3 className="h5">{loan.lender}</h3>
      <p className="mb-1">Original amount: {formatMoney(loan.amount)}</p>
      <p className="mb-1">Amount still due: {formatMoney(loan.dueAmount)}</p>
      <p className="mb-2">Due date: {loan.dueDate}</p>

      <button className="btn btn-sm btn-outline-dark" onClick={handleViewClick}>
        View details
      </button>
    </div>
  );
}

export default LoanCard;