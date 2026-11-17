import { useState } from "react";
import { formatMoney } from "../utils/loanUtils";


function LoanCard({ loan, onDelete }) {
  
  const [showDetails, setShowDetails] = useState(false);

  
  function handleViewClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="loan-card">
       
      <h3 className="h5">{loan.lender}</h3>
      <p className="mb-1">Original amount: {formatMoney(loan.amount)}</p>
      <p className="mb-1">Amount still due: {formatMoney(loan.dueAmount)}</p>
      <p className="mb-2">Due date: {loan.dueDate}</p>

    
      {showDetails && (
        <p className="mb-2 text-secondary">
          Paid so far: {formatMoney(loan.amount - loan.dueAmount)}
        </p>
      )}

      <button className="btn btn-sm btn-outline-dark" onClick={handleViewClick}>
        {showDetails ? "Hide details" : "View details"}
      </button>


      <button
        className="btn btn-sm btn-outline-danger ms-2"
        onClick={() => onDelete(loan.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default LoanCard;