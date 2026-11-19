import { useState } from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/loanUtils";


function LoanCard({ loan, onDelete, onUpdate, showLink }) {
  const [showDetails, setShowDetails] = useState(false);

  const [payment, setPayment] = useState("");

  function handleViewClick() {
    setShowDetails(!showDetails);
  }

  function handlePaymentSubmit(event) {
    event.preventDefault();
    
    onUpdate(loan.id, loan.dueAmount - Number(payment));
    setPayment(""); 
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

          {loan.dueAmount === 0 ? (
            <p className="text-success fw-bold mb-0">Fully paid</p>
          ) : (
            <form onSubmit={handlePaymentSubmit}>
              <label className="form-label mb-1">Record a payment (KSh)</label>
              <div className="d-flex gap-2">
                <input
                  className="form-control form-control-sm"
                  type="number"
                  required
                  min="1"
                  max={loan.dueAmount}
                  value={payment}
                  onChange={(event) => setPayment(event.target.value)}
                />
                <button type="submit" className="btn btn-sm btn-dark">
                  Pay
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <button className="btn btn-sm btn-outline-dark" onClick={handleViewClick}>
        {showDetails ? "Hide details" : "View details"}
      </button>

      {showLink && (
        <Link to={"/loans/" + loan.id} className="btn btn-sm btn-outline-dark ms-2">
          Open page
        </Link>
      )}

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