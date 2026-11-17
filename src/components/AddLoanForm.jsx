import { useState, useRef, useId } from "react";

function AddLoanForm({ onAddLoan }) {
  
  const [lender, setLender] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  
  const id = useId();

  const lenderRef = useRef(null);


  function handleSubmit(event) {
    
    event.preventDefault();

    
    onAddLoan({ lender, amount, dueDate });

    setLender("");
    setAmount("");
    setDueDate("");

    
    lenderRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="loan-card mb-4">
      <h2 className="h5 mb-3">Add a loan</h2>

      <div className="mb-3">
        
        <label htmlFor={id + "-lender"} className="form-label">
          Lender
        </label>
       
       
        <input
          id={id + "-lender"}
          ref={lenderRef}
          className="form-control"
          type="text"
          required
          value={lender}
          onChange={(event) => setLender(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor={id + "-amount"} className="form-label">
          Original amount (KSh)
        </label>
        <input
          id={id + "-amount"}
          className="form-control"
          type="number"
          required
          min="1"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor={id + "-dueDate"} className="form-label">
          Due date
        </label>
        <input
          id={id + "-dueDate"}
          className="form-control"
          type="date"
          required
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Save Loan
      </button>
    </form>
  );
}

export default AddLoanForm;