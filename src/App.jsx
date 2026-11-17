import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SummaryCard from "./components/SummaryCard";
import LoanCard from "./components/LoanCard";
import AddLoanForm from "./components/AddLoanForm";
import { formatMoney } from "./utils/loanUtils";


const sampleLoans = [
  { id: 1, lender: "Equity Bank", amount: 50000, dueAmount: 32000, dueDate: "2026-11-28" },
  { id: 2, lender: "Sacco Loan", amount: 120000, dueAmount: 90000, dueDate: "2026-12-15" },
];

function App() {
  
  
  const [loans, setLoans] = useState(sampleLoans);

  
  function handleAddLoan(formData) {
    
    const newLoan = {
      id: loans.length + 1,
      lender: formData.lender,
      amount: Number(formData.amount),
      dueAmount: Number(formData.amount),
      dueDate: formData.dueDate,
    };

    setLoans([...loans, newLoan]);
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

        <AddLoanForm onAddLoan={handleAddLoan} />

        <h2 className="h4 mb-3">My Loans</h2>

        {loans.length === 0 && (
          <p className="text-secondary">No loans added yet.</p>
        )}

        {loans.map((loan) => (
          <LoanCard key={loan.id} loan={loan} />
        ))}
      </Container>
    </>
  );
}

export default App;