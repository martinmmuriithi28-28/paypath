import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoanCard from "../components/LoanCard";

function LoanList({ loans, loading, error, onDelete, onUpdate }) {
  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 mb-0">My Loans</h1>
        <Link to="/loans/new" className="btn btn-sm btn-dark">
          Add Loan
        </Link>
      </div>

      {loading && <p className="text-secondary">Loading loans...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && loans.length === 0 && (
        <p className="text-secondary">No loans added yet.</p>
      )}

      {loans.map((loan) => (
        <LoanCard
          key={loan.id}
          loan={loan}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </Container>
  );
}

export default LoanList;
