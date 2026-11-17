import { useState } from "react";
import { formatMoney } from "../utils/loanUtils";

function LoanCard({ loan, onDelete, onUpdate }) {
  
  const [showDetails, setShowDetails] = useState(false);
  
  const [newDue, setNewDue] = useState(String(loan.dueAmount));


  function handleViewClick() {
    setShowDetails(!showDetails);
  }

  
  function handleUpdateSubmit(event) {
    event.preventDefault(); 
    
    onUpdate(loan.id, Number(newDue));
  }

  return (
    <div className="loan-card">
    
      <h3 className="h5">{loan.lender}</h3>
      <p className="mb-1">Original amount: {formatMoney(loan.amount)}</p>
      <p className="mb-1">Amount still due: {formatMoney(loan.dueAmount)}</p>
      <p className="mb-2">Due date: {loan.dueDate}</p>

      
      {showDetails && (
        <div className="mb-2">
          <p className="mb-2 text-secondary">
            Paid so far: {formatMoney(loan.amount - loan.dueAmount)}
          </p>

          <form onSubmit={handleUpdateSubmit} className="d-flex gap-2">
            <input
              className="form-control form-control-sm"
              type="number"
              required
              min="0"
              max={loan.amount}
              value={newDue}
              onChange={(event) => setNewDue(event.target.value)}
              aria-label="New amount still due"
            />
            <button type="submit" className="btn btn-sm btn-dark">
              Update
            </button>
          </form>
        </div>
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