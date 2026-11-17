import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SummaryCard from "./components/SummaryCard";
import LoanCard from "./components/LoanCard";
import AddLoanForm from "./components/AddLoanForm";
import { formatMoney } from "./utils/loanUtils";


const API_URL = "http://localhost:3001/loans";

function App() {
  
  const [loans, setLoans] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState("");

  
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        
        if (!response.ok) {
          throw new Error("Could not load loans.");
        }
        
        return response.json();
      })
      .then((data) => {
        setLoans(data); 
        setLoading(false); 
      })
      .catch(() => {
        
        setError("Could not load loans. Is the server running?");
        setLoading(false);
      });
  }, []);


  function handleAddLoan(formData) {
    
    const newLoan = {
      lender: formData.lender,
      amount: Number(formData.amount),
      dueAmount: Number(formData.amount),
      dueDate: formData.dueDate,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLoan),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not save the loan.");
        }
        
        return response.json();
      })
      .then((savedLoan) => {
        
        setLoans([...loans, savedLoan]);
      })
      .catch(() => {
        setError("Could not save the loan. Is the server running?");
      });
  }

  
  function handleDeleteLoan(id) {
   
    fetch(API_URL + "/" + id, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not delete the loan.");
        }
       
        setLoans(loans.filter((loan) => loan.id !== id));
      })
      .catch(() => {
        setError("Could not delete the loan. Is the server running?");
      });
  }

  
  function handleUpdateLoan(id, newDueAmount) {
    
    fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dueAmount: newDueAmount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not update the loan.");
        }
        
        return response.json();
      })
      .then((updatedLoan) => {
    
        setLoans(loans.map((loan) => (loan.id === id ? updatedLoan : loan)));
      })
      .catch(() => {
        setError("Could not update the loan. Is the server running?");
      });
  }

  return (
    <>
      <header className="app-header">
        <h1>
          Pay<span>Path</span>
        </h1>
        <p>Your money, your way</p>
      </header>

     
      <Container className="py-4">
        <h2 className="h4 mb-3">Your Loan Summary</h2>


        <Row className="g-3 mb-4">
          <Col xs={12} sm={6} xl={3}>
            <SummaryCard title="Outstanding Loans" value={formatMoney(122000)} />
          </Col>
          <Col xs={12} sm={6} xl={3}>
            <SummaryCard title="Due This Month" value={formatMoney(32000)} />
          </Col>
          <Col xs={12} sm={6} xl={3}>
            <SummaryCard title="Monthly Income" value={formatMoney(30000)} />
          </Col>
          <Col xs={12} sm={6} xl={3}>
            <SummaryCard title="Repayment Pressure" value="35.6%" />
          </Col>
        </Row>

        {/* We pass handleAddLoan DOWN to the form as a prop called onAddLoan. */}
        <AddLoanForm onAddLoan={handleAddLoan} />

        <h2 className="h4 mb-3">My Loans</h2>

     
        {loading && <p className="text-secondary">Loading loans...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && loans.length === 0 && (
          <p className="text-secondary">No loans added yet.</p>
        )}

        
        {loans.map((loan) => (
          <LoanCard
            key={loan.id}
            loan={loan}
            onDelete={handleDeleteLoan}
            onUpdate={handleUpdateLoan}
          />
        ))}
      </Container>
    </>
  );
}

export default App;