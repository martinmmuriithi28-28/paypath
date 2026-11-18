import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, ProgressBar } from "react-bootstrap";
import LoanCard from "../components/LoanCard";
import { calculatePercentage } from "../utils/loanUtils";

function LoanDetail({ loans, loading, error, onDelete, onUpdate }) {
  
  const { id } = useParams();
  const navigate = useNavigate();

  
  const loan = loans.find((item) => item.id === Number(id));

  
  function handleDelete(loanId) {
    onDelete(loanId);
    navigate("/loans");
  }

  if (loading) {
    return (
      <Container className="py-4">
        <p className="text-secondary">Loading loan...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-4">
        <p className="text-danger">{error}</p>
      </Container>
    );
  }

  if (!loan) {
    return (
      <Container className="py-4">
        <h1 className="h3">Loan not found</h1>
        <p>No loan has this address.</p>
        <Link to="/loans" className="btn btn-dark">
          Back to My Loans
        </Link>
      </Container>
    );
  }

  const paidPercent = calculatePercentage(loan.amount - loan.dueAmount, loan.amount);

  return (
    <Container className="py-4">
      <Link to="/loans" className="d-inline-block mb-3">
        Back to My Loans
      </Link>
      <h1 className="h3 mb-3">Loan details</h1>

      <LoanCard loan={loan} onDelete={handleDelete} onUpdate={onUpdate} />

      <p className="mb-1">Paid so far: {paidPercent.toFixed(1)}%</p>
      <ProgressBar now={paidPercent} aria-label="Share of the loan paid" />
    </Container>
  );
}

export default LoanDetail;